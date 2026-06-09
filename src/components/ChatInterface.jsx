import React, { useEffect, useRef } from 'react';
import { marked } from 'marked';

// Configure marked to be slightly safer
marked.setOptions({
  breaks: true,
  gfm: true
});

const ChatInterface = ({ messages, isTyping }) => {
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="messages-container">
      {messages.length === 0 ? (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
          <img src="/bot-avatar.png" alt="Bot Logo" style={{ width: '80px', height: '80px', marginBottom: '20px', borderRadius: '16px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }} onError={(e) => { e.target.style.display = 'none' }} />
          <h2>Welcome to chatbox01</h2>
          <p>How can I help you today?</p>
        </div>
      ) : (
        messages.map((msg, index) => (
          <div key={index} className={`message-wrapper fade-in ${msg.role === 'assistant' ? 'bot' : ''}`}>
            <div className="message-content">
              <div className={`avatar ${msg.role === 'assistant' ? 'bot' : 'user'}`}>
                {msg.role === 'assistant' ? 'AI' : 'U'}
              </div>
              <div className="message-body" dangerouslySetInnerHTML={{ __html: marked(msg.content) }} />
            </div>
          </div>
        ))
      )}
      
      {isTyping && (
        <div className="message-wrapper bot fade-in">
          <div className="message-content">
            <div className="avatar bot">AI</div>
            <div className="message-body">
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default ChatInterface;
