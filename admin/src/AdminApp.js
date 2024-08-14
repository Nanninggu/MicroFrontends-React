import React from 'react';

const AdminApp = () => (
  <aside style={{ width: '200px', backgroundColor: '#f8f9fa', padding: '10px', borderRight: '1px solid #dee2e6', height: '102.8vh' }}>
    <h2>Admin Menu</h2>
    <ul>
      <li><a href="#dashboard">Dashboard</a></li>
      <li><a href="#users">Users</a></li>
      <li><a href="#settings">Settings</a></li>
    </ul>
  </aside>
);

export default AdminApp;