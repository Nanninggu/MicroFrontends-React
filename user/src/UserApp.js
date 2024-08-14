import React from 'react';

const UserApp = () => (
  <header style={{ backgroundColor: '#f8f9fa', padding: '10px 20px', borderBottom: '1px solid #dee2e6' }}>
    <h2>User Header</h2>
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </nav>
  </header>
);

export default UserApp;