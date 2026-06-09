import React, { useState, useEffect } from 'react';
import { fetchCommunityChatbots } from '../services/firebaseService';
import { Download, RefreshCw, User, AlignLeft } from 'lucide-react';

const Library = ({ onSelectBot, onBack }) => {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBots = async () => {
    setLoading(true);
    try {
      const data = await fetchCommunityChatbots();
      setBots(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBots();
  }, []);

  return (
    <div className="library-container">
      <div className="library-header">
        <h2>Thư viện Chatbot Cộng đồng</h2>
        <button className="btn btn-outline-secondary" onClick={loadBots} disabled={loading}>
          <RefreshCw size={16} className={loading ? 'spinning' : ''} style={{ marginRight: '8px' }}/>
          Làm mới
        </button>
      </div>

      <div className="library-grid">
        {loading ? (
          <div className="loading-state">Đang tải thư viện...</div>
        ) : bots.length === 0 ? (
          <div className="empty-state">Chưa có chatbot nào trong thư viện. Hãy trở thành người đầu tiên!</div>
        ) : (
          bots.map(bot => (
            <div key={bot.id} className="bot-card">
              <h3 className="bot-card-title">{bot.botName}</h3>
              <div className="bot-card-meta">
                <span><User size={14} /> {bot.authorName}</span>
                <span>{new Date(bot.createdAt).toLocaleDateString()}</span>
              </div>
              <p className="bot-card-desc"><AlignLeft size={14} style={{display: 'inline', marginRight: '4px'}}/>{bot.description}</p>
              
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: '15px' }}
                onClick={() => onSelectBot(bot.workspaceState)}
              >
                <Download size={16} style={{ marginRight: '8px' }}/>
                Sử dụng mẫu này
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Library;
