import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const isValid = phone.replace(/\D/g, "").length >= 11;

  return (
    <div className="login-page">
      <div className="login-hero">
        <div className="brand-mark">অ</div>
        <h1 className="brand-title">Oporajito</h1>
        <p className="brand-sub">Learn a skill. Teach a skill. No money needed — just neighbors.</p>
      </div>

      <div className="stitch-divider" />

      <div className="login-form">
        <label className="field-label" htmlFor="phone">Mobile number</label>
        <div className="phone-input">
          <span className="phone-prefix">+88</span>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            placeholder="01XXX-XXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <p className="field-hint">We'll text a 6-digit code to confirm it's you.</p>

        <button
          className="primary-btn"
          disabled={!isValid}
          onClick={() => navigate("/otp", { state: { phone } })}
        >
          Send verification code
        </button>

        <p className="login-footnote">
          By continuing you agree this is a demo prototype for the Oporajito proposal — no real SMS is sent.
        </p>
      </div>
    </div>
  );
}
