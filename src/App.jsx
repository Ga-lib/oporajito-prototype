import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ChatList from "./pages/ChatList";
import ChatThread from "./pages/ChatThread";
import BottomNav from "./components/BottomNav";

function AppShell() {
  const location = useLocation();
  const showNav = ["/home", "/chat", "/profile"].some((p) =>
    location.pathname === p || location.pathname.startsWith("/chat/")
  );

  return (
    <div className="app-frame-outer">
      <div className="app-frame">
        <div className="app-status" />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<ChatList />} />
            <Route path="/chat/:id" element={<ChatThread />} />
          </Routes>
        </div>
        {showNav && <BottomNav />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}
