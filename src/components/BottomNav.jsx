import { NavLink } from "react-router-dom";
import "./BottomNav.css";

const items = [
  {
    to: "/home",
    label: "Home",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 11.5 12 4l8 7.5" stroke={active ? "var(--green-deep)" : "var(--ink-soft)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10v9h12v-9" stroke={active ? "var(--green-deep)" : "var(--ink-soft)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    to: "/chat",
    label: "Chats",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 5h16v11H8l-4 4z" stroke={active ? "var(--green-deep)" : "var(--ink-soft)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    to: "/profile",
    label: "Profile",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3.4" stroke={active ? "var(--green-deep)" : "var(--ink-soft)"} strokeWidth="2" />
        <path d="M4.5 20c1.4-3.6 4.4-5.5 7.5-5.5s6.1 1.9 7.5 5.5" stroke={active ? "var(--green-deep)" : "var(--ink-soft)"} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => "nav-item" + (isActive ? " nav-item--active" : "")}
        >
          {({ isActive }) => (
            <>
              {item.icon(isActive)}
              <span>{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
