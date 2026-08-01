export default function StarRating({ rating, reviews, size = 13 }) {
  const stars = [0, 1, 2, 3, 4];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
      <span style={{ display: "inline-flex", gap: 1 }}>
        {stars.map((i) => {
          const filled = rating >= i + 1;
          const half = !filled && rating > i && rating < i + 1;
          return (
            <svg
              key={i}
              width={size}
              height={size}
              viewBox="0 0 20 20"
              style={{ display: "block" }}
            >
              <defs>
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="var(--marigold)" />
                  <stop offset="50%" stopColor="var(--line)" />
                </linearGradient>
              </defs>
              <path
                d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6L1.3 7.7l6.1-.6z"
                fill={filled ? "var(--marigold)" : half ? `url(#half-${i})` : "var(--line)"}
              />
            </svg>
          );
        })}
      </span>
      <span style={{ fontSize: 12.5, color: "var(--ink-soft)", fontWeight: 600 }}>
        {rating.toFixed(1)}
        {reviews != null && <span style={{ fontWeight: 500 }}> ({reviews})</span>}
      </span>
    </span>
  );
}
