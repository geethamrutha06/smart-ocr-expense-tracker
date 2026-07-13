import "../styles/login.css";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <div className="logo">
          📄
        </div>

        <h1>Smart OCR Expense Tracker</h1>
        <p>Upload. Extract. Verify. Save.</p>

        <div className="input-box">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Enter Email"
          />
        </div>

        <div className="input-box">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Enter Password"
          />
        </div>

        <button>Login</button>

      </div>
    </div>
  );
}

export default Login;