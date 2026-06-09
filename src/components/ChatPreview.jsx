import React, { useState, useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { marked } from 'marked';

const ChatPreview = ({ messages, onSendMessage, onClearChat, isTyping }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (input.trim() && !isTyping) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="chat-preview-container">
      <div className="chat-header-actions">
        <button className="btn btn-outline-primary" style={{ padding: '6px 12px' }} onClick={onClearChat}>
          <Plus size={14} /> Cuộc trò chuyện mới
        </button>
      </div>

      <div className="chat-messages">
        {messages.length === 0 ? (
          <div className="welcome-screen">
            <img src="/bot-avatar.png" alt="Bot Logo" width="60" onError={(e) => { e.target.style.display = 'none' }} />
            <h2>Chào mừng đến với Build-a-Bot</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Thực hiện thay đổi ở bên trái và thử nghiệm<br/>chúng ở bên này.</p>
            
            <div className="suggestions">
              <div className="suggestion-chip">
                Bạn có thể giải thích sự khác biệt giữa 'ser' và 'estar' với các ví dụ không? Tôi luôn bối rối về việc khi nào nên sử dụng chúng.
              </div>
            </div>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              <div 
                className="message-content"
                dangerouslySetInnerHTML={{ __html: msg.role === 'assistant' ? marked(msg.content) : msg.content }}
              />
            </div>
          ))
        )}
        {isTyping && (
          <div className="message assistant">
            <div className="message-content">Đang trả lời...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <input 
          type="text" 
          placeholder="Nhập tin nhắn của bạn..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isTyping}
        />
        <button className="btn-send" onClick={handleSend} disabled={!input.trim() || isTyping}>
          Gửi
        </button>
      </div>
    </div>
  );
};

export default ChatPreview;
