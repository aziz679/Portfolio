import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShowcaseHomePage from '../pages/ShowcaseHomePage';
import AboutPage from '../pages/AboutPage';
import ExperiencePage from '../pages/ExperiencePage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ShowcaseHomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/work" element={<ExperiencePage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
