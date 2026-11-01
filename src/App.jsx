import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import LecturersPage from './pages/LecturersPage.jsx';
import LecturerDetailPage from './pages/LecturerDetailPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PartnersPage from './pages/PartnersPage.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="lecturers" element={<LecturersPage />} />
        <Route path="lecturers/:id" element={<LecturerDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;