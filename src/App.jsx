import React, { useState, useRef, useEffect } from 'react';
import BlocklyWorkspace from './components/BlocklyWorkspace';
import ChatPreview from './components/ChatPreview';
import PublishModal from './components/PublishModal';
import Library from './components/Library';
import { sendMessageToAI } from './services/aiService';
import { saveChatbotToLibrary } from './services/firebaseService';
import { Trash2, Dices, Globe, Library as LibraryIcon, Code } from 'lucide-react';
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
      // Serialize workspace
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
    // Cần cho React một chút thời gian để render lại BlocklyWorkspace
    setTimeout(() => {
      if (workspaceRef.current) {
        workspaceRef.current.loadWorkspaceState(state);
      }
    }, 100);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          <h1>🤖 Build-a-Bot</h1>
          <p>Thiết kế Chatbot AI tùy chỉnh của riêng bạn bằng cách lắp ghép các khối lệnh</p>
        </div>
        <div className="header-tabs">
          <button 
            className={`btn ${activeTab === 'builder' ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => setActiveTab('builder')}
          >
            <Code size={18} style={{ marginRight: '8px' }}/> Chế độ tạo
          </button>
          <button 
            className={`btn ${activeTab === 'library' ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => setActiveTab('library')}
          >
            <LibraryIcon size={18} style={{ marginRight: '8px' }}/> Thư viện cộng đồng
          </button>
        </div>
      </header>

      {activeTab === 'builder' ? (
        <div className="main-content">
          <div className="panel left-panel">
            <BlocklyWorkspace 
              ref={workspaceRef}
              onSystemPromptChange={setSystemPrompt} 
            />
            <div className="panel-footer" style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
              <button className="btn btn-outline-danger" onClick={handleClearWorkspace} title="Xóa toàn bộ">
                <Trash2 size={18} />
              </button>
              <button className="btn btn-primary" onClick={handleGenerateRandom} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Dices size={18} /> Tạo Chatbot Ngẫu nhiên
              </button>
              <button className="btn btn-success" onClick={() => setShowPublishModal(true)} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
                <Globe size={18} /> Đăng lên Thư viện
              </button>
            </div>
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
        <div className="main-content" style={{ display: 'block' }}>
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
