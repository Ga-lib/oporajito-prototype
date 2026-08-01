import { useMemo, useState } from "react";
import { neighbors, districts, skillTags, currentUser } from "../data/mockData";
import NeighborCard from "../components/NeighborCard";
import "./Home.css";

export default function Home() {
  const [query, setQuery] = useState("");
  const [district, setDistrict] = useState("Dhaka");
  const [activeTag, setActiveTag] = useState(null);
  const [toast, setToast] = useState(null);

  const filtered = useMemo(() => {
    return neighbors.filter((p) => {
      const matchesQuery =
        query.trim() === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.teaches.some((s) => s.toLowerCase().includes(query.toLowerCase()));
      const matchesTag =
        !activeTag || p.teaches.some((s) => s.toLowerCase().includes(activeTag.toLowerCase()));
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  const handleRequest = (person) => {
    setToast(`Request sent to ${person.name.split(" ")[0]}!`);
    setTimeout(() => setToast(null), 2200);
  };

  return (
    <div className="home-page">
      <div className="home-header">
        <div>
          <p className="home-greeting">Assalamu Alaikum,</p>
          <h1 className="home-name">{currentUser.name.split(" ")[0]} 👋</h1>
        </div>
        <div className="district-pill">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M12 22s7-6.6 7-12A7 7 0 0 0 5 10c0 5.4 7 12 7 12Z" stroke="var(--green-deep)" strokeWidth="2" />
            <circle cx="12" cy="10" r="2.5" stroke="var(--green-deep)" strokeWidth="2" />
          </svg>
          {district}
        </div>
      </div>

      <div className="search-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="var(--ink-soft)" strokeWidth="2" />
          <path d="m21 21-3.5-3.5" stroke="var(--ink-soft)" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          placeholder="Search a skill or a neighbor..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="tag-row">
        {skillTags.map((tag) => (
          <button
            key={tag}
            className={"tag-pill" + (activeTag === tag ? " tag-pill--active" : "")}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="district-row">
        {districts.map((d) => (
          <button
            key={d}
            className={"district-chip" + (district === d ? " district-chip--active" : "")}
            onClick={() => setDistrict(d)}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="stitch-divider" style={{ margin: "18px 0 14px" }} />

      <p className="section-label">
        {filtered.length} skilled neighbor{filtered.length !== 1 ? "s" : ""} near you
      </p>

      <div className="neighbor-list">
        {filtered.length === 0 && (
          <p className="empty-state">No matches yet — try a different skill or clear the filter.</p>
        )}
        {filtered.map((p) => (
          <NeighborCard key={p.id} person={p} onRequest={handleRequest} />
        ))}
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
