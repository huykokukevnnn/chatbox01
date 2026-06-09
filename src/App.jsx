import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import BlocklyWorkspace from './components/BlocklyWorkspace';
import ChatPreview from './components/ChatPreview';
import PublishModal from './components/PublishModal';
import GalleryModal from './components/GalleryModal';
import { sendMessageToAI } from './services/aiService';
import { publishBotToGallery, fetchGalleryBots } from './services/databaseService';

function App() {
  const [messages, setMessages] = useState([]);
  const [systemPrompt, setSystemPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // States for Gallery
  const [isPublishOpen, setIsPublishOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryBots, setGalleryBots] = useState([]);
  
  const workspaceRef = useRef(null);

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleSendMessage = async (content) => {
    const newMessages = [...messages, { role: 'user', content }];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      const response = await sendMessageToAI(newMessages, systemPrompt);
      setMessages([...newMessages, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: 'Error: Could not get response.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handlePublish = async (botDetails) => {
    const workspaceData = workspaceRef.current?.getWorkspaceData();
    if (!workspaceData) return;

    const fullBotData = {
      ...botDetails,
      workspaceData,
      systemPrompt
    };

    try {
      await publishBotToGallery(fullBotData);
      alert("Đăng Chatbot thành công!");
    } catch (err) {
      alert("Đã xảy ra lỗi khi đăng.");
    }
  };

  const openGallery = async () => {
    setIsGalleryOpen(true);
    const bots = await fetchGalleryBots();
    setGalleryBots(bots);
  };

  const handleLoadBot = (workspaceData, newSystemPrompt) => {
    workspaceRef.current?.loadWorkspaceData(workspaceData);
    setSystemPrompt(newSystemPrompt);
    setIsGalleryOpen(false);
    handleClearChat(); // Clear previous chat context
    alert("Đã tải Chatbot thành công!");
  };

  const handleNewBot = () => {
    workspaceRef.current?.resetWorkspace();
    setSystemPrompt('');
    handleClearChat();
  };

  return (
    <>
      <Header 
        onPublishClick={() => setIsPublishOpen(true)}
        onGalleryClick={openGallery}
        onNewBotClick={handleNewBot}
      />
      <div className="app-main">
        <div className="panel left-panel">
          <BlocklyWorkspace 
            ref={workspaceRef}
            onSystemPromptChange={setSystemPrompt} 
          />
        </div>
        <div className="panel right-panel">
          <ChatPreview 
            messages={messages} 
            systemPrompt={systemPrompt}
            onSendMessage={handleSendMessage} 
            onClearChat={handleClearChat}
            isTyping={isTyping} 
          />
        </div>
      </div>
      
      <PublishModal 
        isOpen={isPublishOpen}
        onClose={() => setIsPublishOpen(false)}
        onPublish={handlePublish}
      />
      
      <GalleryModal 
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        bots={galleryBots}
        onLoadBot={handleLoadBot}
      />
    </>
  );
}

export default App;
