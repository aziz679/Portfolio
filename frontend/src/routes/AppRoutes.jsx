import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MinimalistHomePage from '../pages/MinimalistHomePage';
import AboutPage from '../pages/AboutPage';
import WorkPage from '../pages/WorkPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MinimalistHomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
