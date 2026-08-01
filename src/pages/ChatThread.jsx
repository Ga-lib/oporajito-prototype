import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { conversations } from "../data/mockData";
import "./ChatThread.css";

export default function ChatThread() {
  const { id } = useParams();
  const navigate = useNavigate();
  const convo = conversations.find((c) => String(c.id) === id) || conversations[0];
  const [messages, setMessages] = useState(convo.messages);
  const [draft, setDraft] = useState("");

  const send = () => {
    if (!draft.trim()) return;
    setMessages([...messages, { id: messages.length + 1, from: "me", text: draft.trim() }]);
    setDraft("");
  };

  return (
    <div className="thread-page">
      <div className="thread-header">
        <button className="thread-back" onClick={() => navigate("/chat")}>←</button>
        <div className="thread-avatar">{convo.avatar}</div>
        <div className="thread-name">{convo.name}</div>
      </div>

      <div className="thread-messages">
        <div className="thread-notice">
          🔒 Phone numbers stay private. Meet in public neighborhood spots.
        </div>
        {messages.map((m) => (
          <div key={m.id} className={"bubble-row " + (m.from === "me" ? "bubble-row--me" : "")}>
            <div className={"bubble " + (m.from === "me" ? "bubble--me" : "bubble--them")}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="thread-composer">
        <input
          placeholder="Type a message..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button className="send-btn" onClick={send} aria-label="Send message">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <path d="M4 20l17-8L4 4l0 6.5L15 12 4 13.5 4 20z" fill="#fff" />
          </svg>
        </button>
      </div>
    </div>
  );
}
