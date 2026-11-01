import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '72px', margin: '0 0 20px' }}>404</h1>
      <p style={{ fontSize: '20px', color: '#666', marginBottom: '30px' }}>Страница не найдена</p>
      <Link to="/" style={{ color: '#3d6cd1', fontWeight: 'bold', fontSize: '16px', textDecoration: 'underline' }}>
        На главную
      </Link>
    </div>
  );
};

export default NotFound;