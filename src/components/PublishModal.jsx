import React, { useState } from 'react';
import './Modal.css';

export default function PublishModal({ isOpen, onClose, onPublish }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    setIsSubmitting(true);
    await onPublish({ name, description, author });
    setIsSubmitting(false);
    
    // Reset form
    setName('');
    setDescription('');
    setAuthor('');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Đăng Chatbot lên Thư viện</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tên Chatbot *</label>
            <input 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              placeholder="VD: Gia sư Toán vui tính"
              required 
            />
          </div>
          <div className="form-group">
            <label>Mô tả ngắn gọn</label>
            <textarea 
              value={description} 
              onChange={e => setDescription(e.target.value)} 
              placeholder="Chatbot này giúp bạn làm gì..."
              rows={3}
            />
          </div>
          <div className="form-group">
            <label>Tên tác giả</label>
            <input 
              type="text" 
              value={author} 
              onChange={e => setAuthor(e.target.value)} 
              placeholder="Để trống nếu muốn ẩn danh"
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" onClick={onClose} disabled={isSubmitting}>
              Hủy
            </button>
            <button type="submit" className="btn btn-success" disabled={isSubmitting || !name.trim()}>
              {isSubmitting ? 'Đang đăng...' : 'Đăng lên Thư viện'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
