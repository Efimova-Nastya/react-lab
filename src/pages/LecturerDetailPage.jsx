import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { lecturers } from '../data/lecturers';
import '../components/lectors/Lectors.css';

const LecturerDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const lecturer = lecturers.find(l => l.id === Number(id));

  if (!lecturer) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Лектор не найден</h2>
        <button className="apply-btn" onClick={() => navigate('/lecturers')}>
          Вернуться к списку
        </button>
      </div>
    );
  }

  return (
    <div className="lectors-container">
      <button className="back-btn" onClick={() => navigate('/lecturers')}>
        ← Назад к списку
      </button>

      <article className="lecturer-card">
        <div className="lecturer-photo">
          <div className="photo-placeholder">
            {lecturer.photo ? (
              <img src={lecturer.photo} alt={lecturer.name} className="lecturer-img" />
            ) : (
              <>Место для фото преподавателя</>
            )}
          </div>
        </div>

        <div className="lecturer-info">
          <h3>{lecturer.name}</h3>
          <ul className="lecturer-meta">
            <li><strong>Образование:</strong> {lecturer.education}</li>
            <li><strong>Стаж:</strong> {lecturer.experience}</li>
            <li><strong>Учёная степень:</strong> {lecturer.degree}</li>
          </ul>
          <button className="apply-btn" onClick={() => alert(`Заявка отправлена лектору: ${lecturer.name}`)}>
            Оставить заявку
          </button>
        </div>
      </article>

      {lecturer.disciplines.length > 0 && (
        <section className="lecturer-section">
          <h3>Преподаваемые дисциплины</h3>
          <div className="disciplines-grid">
            {lecturer.disciplines.map((d, i) => (
              <div key={i} className="discipline-card">
                <h4>{d.title}</h4>
                <p className="discipline-desc">{d.description}</p>
                <ul className="discipline-topics">
                  {d.topics.map((t, j) => <li key={j}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {lecturer.tariffs.length > 0 && (
        <section className="lecturer-section">
          <h3>Тарифы</h3>
          <div className="tariffs-grid">
            {lecturer.tariffs.map((t, i) => (
              <div key={i} className="tariff-card">
                <span className="tariff-name">{t.name}</span>
                <span className="tariff-price">{t.price}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default LecturerDetailPage;