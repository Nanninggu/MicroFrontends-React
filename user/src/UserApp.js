import React from "react";
import "./UserApp.css"; // CSS 파일 임포트

const UserApp = () => (
  <header
    style={{
      backgroundColor: "#f8f9fa",
      padding: "10px 20px",
      borderBottom: "1px solid #dee2e6",
    }}
  >
    <h2>
      <a href="http://localhost:3000">Header</a>
    </h2>
    <nav>
      <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
        <li className="hoverable-item">
          <a href="http://localhost:3000">Home</a>
        </li>
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#settings">Settings</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default UserApp;
