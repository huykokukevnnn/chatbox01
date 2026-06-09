import React from 'react';
import { MessageSquare, Plus, Settings } from 'lucide-react';

const Sidebar = ({ chats, activeChatId, onSelectChat, onNewChat }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button className="new-chat-btn" onClick={onNewChat}>
          <Plus size={18} />
          <span>New Chat</span>
        </button>
      </div>
      
      <div className="chat-history">
        {chats.map(chat => (
          <div 
            key={chat.id} 
            className={`history-item ${chat.id === activeChatId ? 'active' : ''}`}
            onClick={() => onSelectChat(chat.id)}
          >
            <MessageSquare size={16} />
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {chat.title || 'New Conversation'}
            </span>
          </div>
        ))}
      </div>
      
      <div style={{ padding: '16px', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', cursor: 'pointer' }}>
        <Settings size={18} />
        <span>Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
