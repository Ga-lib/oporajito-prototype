import { useState } from "react";
import { currentUser } from "../data/mockData";
import StarRating from "../components/StarRating";
import "./Profile.css";

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [bio, setBio] = useState(currentUser.bio);

  return (
    <div className="profile-page">
      <div className="profile-banner" />
      <div className="profile-main">
        <div className="profile-avatar">{currentUser.avatar}</div>

        <div className="profile-headline">
          <h1>{currentUser.name}</h1>
          <button className="edit-btn" onClick={() => setEditing((e) => !e)}>
            {editing ? "Done" : "Edit"}
          </button>
        </div>
        <p className="profile-location">📍 {currentUser.area}, {currentUser.district}</p>
        <StarRating rating={currentUser.rating} reviews={currentUser.reviews} size={15} />

        <div className="stitch-divider" style={{ margin: "18px 0" }} />

        <div className="profile-block">
          <h2>About</h2>
          {editing ? (
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={4} />
          ) : (
            <p className="profile-bio">{bio}</p>
          )}
        </div>

        <div className="profile-block">
          <h2>Skills I teach</h2>
          <div className="chip-group">
            {currentUser.teaches.map((s) => (
              <span key={s} className="skill-chip skill-chip--teach">{s}</span>
            ))}
            {editing && <button className="add-chip">+ Add</button>}
          </div>
        </div>

        <div className="profile-block">
          <h2>Skills I want to learn</h2>
          <div className="chip-group">
            {currentUser.wants.map((s) => (
              <span key={s} className="skill-chip skill-chip--want">{s}</span>
            ))}
            {editing && <button className="add-chip">+ Add</button>}
          </div>
        </div>

        <div className="profile-block">
          <h2>Recent reviews</h2>
          <div className="review-item">
            <div className="review-top">
              <span className="review-name">Nusrat Jahan</span>
              <StarRating rating={5} size={11} />
            </div>
            <p className="review-text">"Rafiq explained things very simply. Great first coding lesson!"</p>
          </div>
          <div className="review-item">
            <div className="review-top">
              <span className="review-name">Shirin Akter</span>
              <StarRating rating={4.5} size={11} />
            </div>
            <p className="review-text">"Punctual and patient teacher, would learn from him again."</p>
          </div>
        </div>

        <button className="logout-btn">Log out</button>
      </div>
    </div>
  );
}
