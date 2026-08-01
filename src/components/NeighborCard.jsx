import StarRating from "./StarRating";
import "./NeighborCard.css";

export default function NeighborCard({ person, onRequest }) {
  return (
    <div className="neighbor-card">
      <div className="neighbor-avatar">{person.avatar}</div>
      <div className="neighbor-info">
        <div className="neighbor-top">
          <span className="neighbor-name">{person.name}</span>
          <span className="neighbor-distance">{person.distanceKm} km</span>
        </div>
        <div className="neighbor-area">{person.area}</div>
        <StarRating rating={person.rating} reviews={person.reviews} />
        <div className="neighbor-skills">
          {person.teaches.map((s) => (
            <span className="skill-chip" key={s}>{s}</span>
          ))}
        </div>
      </div>
      <button className="request-btn" onClick={() => onRequest?.(person)}>
        Request
      </button>
    </div>
  );
}
