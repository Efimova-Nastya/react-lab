import React from 'react';
import { Link } from 'react-router-dom';
import { lecturers } from '../data/lecturers';
import '../components/lectors/Lectors.css';

const LecturersPage = () => {
  return (
    <div className="lectors-container">
      <h2>Лекторы</h2>
      <div className="lecturers-list">
        {lecturers.map(l => {
          console.log("Рендер карточки: " + l.name);

          return (
            <Link 
              to={`/lecturers/${l.id}`} 
              key={l.id} 
              className="lecturer-list-card" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="list-photo">
                {l.photo ? (
                  <img src={l.photo} alt={l.name} className="list-img" />
                ) : (
                  <div className="list-photo-placeholder">Фото</div>
                )}
              </div>
              <div className="list-info">
                <h3>{l.name}</h3>
                <p className="list-role">{l.shortRole}</p>
                <span className="more-btn">Подробнее →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LecturersPage;