import React from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleReviewsClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const reviewsSection = document.getElementById('reviews');
        if (reviewsSection) {
          reviewsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const reviewsSection = document.getElementById('reviews');
      if (reviewsSection) {
        reviewsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" onClick={handleHomeClick} className="logo" style={{ textDecoration: 'none', cursor: 'pointer' }}>
          LectorPro
        </a>

        <nav className="nav-container">
          <button onClick={handleHomeClick} className={`nav-btn ${location.pathname === '/' ? 'active' : ''}`} type="button">
            Главная
          </button>

          <button onClick={handleReviewsClick} className="nav-btn" type="button">
            Отзывы
          </button>

          <NavLink 
            to="/partners" 
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
          >
            Партнеры
          </NavLink>

          <NavLink 
            to="/lecturers" 
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
          >
            Лекторы
          </NavLink>
        </nav>
        
        <a href="tel:+79277777777" className="phone">
          <img src="/phone.png" className="phone-img" alt="Телефон" />
          <span>+7 927 777 77 77</span>
        </a>
      </div>
    </header>
  );
};

export default Header;