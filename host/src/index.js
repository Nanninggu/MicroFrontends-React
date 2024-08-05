import React, { Suspense, lazy, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary';

const loadComponent = (scope, module) => {
  return async () => {
    await __webpack_init_sharing__('default');
    const container = window[scope];
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get(module);
    const Module = factory();
    return Module;
  };
};

const UserApp = lazy(loadComponent('user', './UserApp'));
const AdminApp = lazy(loadComponent('admin', './AdminApp'));
const DepartmentApp = lazy(loadComponent('department', './DepartmentApp'));

const App = () => {
  const [services, setServices] = useState({
    user: false,
    admin: false,
    department: false,
  });

  useEffect(() => {
    const checkServices = async () => {
      const serviceStatus = { user: false, admin: false, department: false };
      try {
        await import('user/UserApp');
        serviceStatus.user = true;
      } catch (e) {
        console.warn('User service is not available');
      }
      try {
        await import('admin/AdminApp');
        serviceStatus.admin = true;
      } catch (e) {
        console.warn('Admin service is not available');
      }
      try {
        await import('department/DepartmentApp');
        serviceStatus.department = true;
      } catch (e) {
        console.warn('Department service is not available');
      }
      setServices(serviceStatus);
    };

    checkServices();
  }, []);

return (
  <div>
    <h1>Host Application</h1>
    {services.user ? (
      <ErrorBoundary>
        <Suspense fallback={<div>Loading UserApp...</div>}>
          <UserApp />
        </Suspense>
      </ErrorBoundary>
    ) : (
      <div>user application이 실행중이지 않습니다.</div>
    )}
    {services.admin ? (
      <ErrorBoundary>
        <Suspense fallback={<div>Loading AdminApp...</div>}>
          <AdminApp />
        </Suspense>
      </ErrorBoundary>
    ) : (
      <div>admin application이 실행중이지 않습니다.</div>
    )}
    {services.department ? (
      <ErrorBoundary>
        <Suspense fallback={<div>Loading DepartmentApp...</div>}>
          <DepartmentApp />
        </Suspense>
      </ErrorBoundary>
    ) : (
      <div>department application이 실행중이지 않습니다.</div>
    )}
  </div>
);
};

ReactDOM.render(<App />, document.getElementById('root'));