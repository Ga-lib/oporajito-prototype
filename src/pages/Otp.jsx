import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Otp.css";

export default function Otp() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const phone = state?.phone || "01XXX-XXXXXX";
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...digits];
    next[i] = val;
    setDigits(next);
    if (val && i < 5) inputs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      inputs.current[i - 1]?.focus();
    }
  };

  const isComplete = digits.every((d) => d !== "");

  return (
    <div className="otp-page">
      <button className="back-link" onClick={() => navigate(-1)}>← Back</button>

      <h1 className="otp-title">Enter the code</h1>
      <p className="otp-sub">We sent a 6-digit code to <strong>+88 {phone}</strong></p>

      <div className="otp-inputs">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => (inputs.current[i] = el)}
            value={d}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            inputMode="numeric"
            maxLength={1}
            className="otp-digit"
          />
        ))}
      </div>

      <button
        className="primary-btn"
        disabled={!isComplete}
        onClick={() => navigate("/home")}
      >
        Verify & continue
      </button>

      <p className="otp-resend">
        Didn't get a code? <span>Resend in 0:28</span>
      </p>
    </div>
  );
}
