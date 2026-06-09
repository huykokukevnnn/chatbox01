import React, { useState } from 'react';
import { X, Globe } from 'lucide-react';

const PublishModal = ({ isOpen, onClose, onPublish, isPublishing }) => {
  const [botName, setBotName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!botName.trim() || !authorName.trim() || !description.trim()) return;
    
    onPublish({
      botName: botName.trim(),
      authorName: authorName.trim(),
      description: description.trim()
    });
  };

  return (
    <div className="publish-modal-overlay">
      <div className="publish-modal">
        <div className="publish-modal-header">
          <h3><Globe size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }}/> Đăng lên Thư viện</h3>
          <button className="btn-close" onClick={onClose} disabled={isPublishing}>
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="publish-modal-content">
          <div className="form-group">
            <label>Tên Chatbot</label>
            <input 
              type="text" 
              placeholder="VD: Giáo viên Tiếng Anh Vui Tính" 
              value={botName}
              onChange={e => setBotName(e.target.value)}
              disabled={isPublishing}
              required 
            />
          </div>
          <div className="form-group">
            <label>Tên tác giả</label>
            <input 
              type="text" 
              placeholder="Tên hoặc biệt danh của bạn" 
              value={authorName}
              onChange={e => setAuthorName(e.target.value)}
              disabled={isPublishing}
              required 
            />
          </div>
          <div className="form-group">
            <label>Mô tả ngắn</label>
            <textarea 
              placeholder="Chatbot này giỏi việc gì? Dùng cho đối tượng nào?" 
              value={description}
              onChange={e => setDescription(e.target.value)}
              disabled={isPublishing}
              rows={3}
              required 
            />
          </div>
          <div className="publish-modal-footer">
            <button type="button" className="btn btn-outline-secondary" onClick={onClose} disabled={isPublishing}>Hủy</button>
            <button type="submit" className="btn btn-primary" disabled={!botName || !authorName || !description || isPublishing}>
              {isPublishing ? 'Đang đăng...' : 'Đăng lên Thư viện'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublishModal;
