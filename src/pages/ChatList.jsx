import { useNavigate } from "react-router-dom";
import { conversations } from "../data/mockData";
import "./ChatList.css";

export default function ChatList() {
  const navigate = useNavigate();

  return (
    <div className="chatlist-page">
      <h1 className="chatlist-title">Chats</h1>
      <p className="chatlist-sub">Talk safely without sharing your phone number.</p>

      <div className="stitch-divider" style={{ margin: "14px 0" }} />

      <div className="chat-rows">
        {conversations.map((c) => (
          <button
            key={c.id}
            className="chat-row"
            onClick={() => navigate(`/chat/${c.id}`)}
          >
            <div className="chat-avatar">{c.avatar}</div>
            <div className="chat-row-main">
              <div className="chat-row-top">
                <span className="chat-row-name">{c.name}</span>
                <span className="chat-row-time">{c.time}</span>
              </div>
              <div className="chat-row-bottom">
                <span className="chat-row-last">{c.lastMessage}</span>
                {c.unread > 0 && <span className="chat-unread">{c.unread}</span>}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
