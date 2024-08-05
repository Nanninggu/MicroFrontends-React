import React from 'react';
import ReactDOM from 'react-dom';

const UserApp = React.lazy(() => import('user/UserApp'));
const AdminApp = React.lazy(() => import('admin/AdminApp'));
const DepartmentApp = React.lazy(() => import('department/DepartmentApp'));

const App = () => (
  <React.Suspense fallback="Loading...">
    <div>
      <h1>Host Application</h1>
      <UserApp />
      <AdminApp />
      <DepartmentApp />
    </div>
  </React.Suspense>
);

ReactDOM.render(<App />, document.getElementById('root'));