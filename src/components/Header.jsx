import React from 'react';
import { Megaphone, PlusSquare, Image as ImageIcon, Shield, Globe } from 'lucide-react';

export default function Header({ onPublishClick, onGalleryClick, onNewBotClick }) {
  return (
    <header className="app-header">
      <div className="brand">
        <img src="/bot-avatar.png" alt="Logo" width="40" onError={(e) => { e.target.style.display = 'none' }} />
        <h1>Build-a-Bot</h1>
      </div>
      
      <div className="header-actions">
        <button className="btn btn-success" onClick={onPublishClick}>
          <Megaphone size={16} /> Đăng lên Thư viện
        </button>
        <button className="btn btn-outline-primary" onClick={onNewBotClick}>
          <PlusSquare size={16} /> Tạo Bot Mới
        </button>
        <button className="btn btn-outline-secondary" style={{ border: 'none', background: 'transparent' }} onClick={onGalleryClick}>
          <ImageIcon size={16} color="red" /> Thư viện Chatbot
        </button>
        <button className="btn btn-outline-secondary">
          <Shield size={16} />
        </button>
        <button className="btn btn-outline-secondary">
          <Globe size={16} /> Tiếng Việt
        </button>
      </div>
    </header>
  );
}
