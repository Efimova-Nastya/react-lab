import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header.jsx'; 

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;