import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import BlocklyWorkspace from './components/BlocklyWorkspace';
import ChatPreview from './components/ChatPreview';
import PublishModal from './components/PublishModal';
import Library from './components/Library';
import { sendMessageToAI } from './services/aiService';
import { saveChatbotToLibrary } from './services/firebaseService';
import './App.css';
import './library.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [systemPrompt, setSystemPrompt] = useState('');
  const [activeTab, setActiveTab] = useState('builder'); // 'builder' or 'library'
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  
  const workspaceRef = useRef(null);

  const handleSendMessage = async (text) => {
    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      const response = await sendMessageToAI(newMessages, systemPrompt);
      setMessages([...newMessages, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: 'Lỗi: ' + error.message }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleClearWorkspace = () => {
    if (workspaceRef.current && window.confirm("Bạn có chắc chắn muốn xóa toàn bộ không gian làm việc?")) {
      workspaceRef.current.clearWorkspace();
    }
  };

  const handleGenerateRandom = () => {
    if (workspaceRef.current) {
      workspaceRef.current.generateRandomConfig();
    }
  };

  const handlePublish = async (botInfo) => {
    if (!workspaceRef.current) return;
    
    setIsPublishing(true);
    try {
      const state = workspaceRef.current.getWorkspaceState();
      await saveChatbotToLibrary({
        ...botInfo,
        workspaceState: state
      });
      alert("Đăng lên thư viện thành công!");
      setShowPublishModal(false);
      setActiveTab('library');
    } catch (error) {
      alert("Lỗi khi đăng: " + error.message);
    } finally {
      setIsPublishing(false);
    }
  };

  const handleSelectBotFromLibrary = (state) => {
    setActiveTab('builder');
    setTimeout(() => {
      if (workspaceRef.current) {
        workspaceRef.current.loadWorkspaceState(state);
      }
    }, 100);
  };

  return (
    <div className="app-container">
      <Header 
        onPublishClick={() => setShowPublishModal(true)}
        onGalleryClick={() => setActiveTab('library')}
        onNewBotClick={handleClearWorkspace}
      />

      {activeTab === 'builder' ? (
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
              onSendMessage={handleSendMessage} 
              onClearChat={handleClearChat}
              isTyping={isTyping} 
            />
          </div>
        </div>
      ) : (
        <div className="app-main" style={{ display: 'block' }}>
          <button className="btn btn-outline-secondary" onClick={() => setActiveTab('builder')} style={{ margin: '10px 20px' }}>
            ← Quay lại Chế độ tạo
          </button>
          <Library onSelectBot={handleSelectBotFromLibrary} />
        </div>
      )}

      <PublishModal 
        isOpen={showPublishModal} 
        onClose={() => setShowPublishModal(false)}
        onPublish={handlePublish}
        isPublishing={isPublishing}
      />
    </div>
  );
};

export default App;
