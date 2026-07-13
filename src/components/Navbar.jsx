import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        📄 Smart OCR Expense Tracker
      </div>

      <ul className="nav-links">
        <li>Dashboard</li>
        <li>Upload</li>
        <li>History</li>
      </ul>

      <div className="profile-container">

        <div
          className="profile"
          onClick={() => setShowMenu(!showMenu)}
        >
          👤 Mahii ▼
        </div>

        {showMenu && (
          <div className="dropdown-menu">
            <button className="logout-btn">
              Logout
            </button>
          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;