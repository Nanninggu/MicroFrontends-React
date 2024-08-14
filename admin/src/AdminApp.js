import React from 'react';

const AdminApp = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '114vh' }}>
    <header style={{ backgroundColor: '#343a40', color: '#fff', padding: '10px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Admin Panel</h1>
    </header>
    <aside style={{ width: '200px', backgroundColor: '#f8f9fa', padding: '10px', borderRight: '1px solid #dee2e6', flex: '1' }}>
      <h2>Admin Menu</h2>
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#users">Users</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </aside>
  </div>
);

export default AdminApp;