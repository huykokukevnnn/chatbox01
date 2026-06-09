import React, { useState, useEffect } from 'react';
import './Modal.css';

export default function GalleryModal({ isOpen, onClose, bots, onLoadBot }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content large">
        <div className="modal-header">
          <h2>Thư viện Chatbot</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        {bots.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', padding: '40px 0' }}>
            Chưa có Chatbot nào trong thư viện. Hãy là người đầu tiên đóng góp nhé!
          </p>
        ) : (
          <div className="gallery-grid">
            {bots.map((bot, index) => {
              // Tạo màu ngẫu nhiên dựa trên index
              const hue = (index * 137.5) % 360;
              const bgColor = `hsl(${hue}, 70%, 85%)`;
              const iconColor = `hsl(${hue}, 80%, 40%)`;

              return (
                <div key={bot.id} className="bot-card">
                  <div className="bot-avatar" style={{ backgroundColor: bgColor }}>
                    <span style={{ color: iconColor, fontSize: '2.5rem' }}>🤖</span>
                  </div>
                  <h3 className="bot-title">{bot.name}</h3>
                  <p className="bot-desc">{bot.description || 'Không có mô tả.'}</p>
                  <div className="bot-meta">
                    <span className="author">Bởi: {bot.author || 'Ẩn danh'}</span>
                    <span className="date">{new Date(bot.createdAt).toLocaleDateString('vi-VN')}</span>
                  </div>
                  <button 
                    className="btn btn-primary" 
                    style={{ width: '100%', borderRadius: '20px', padding: '10px' }}
                    onClick={() => onLoadBot(bot.workspaceData, bot.systemPrompt)}
                  >
                    Dùng thử (Try it out)
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
