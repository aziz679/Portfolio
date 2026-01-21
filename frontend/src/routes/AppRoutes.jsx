import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CleanHomePage from '../pages/CleanHomePage';
import InspiredAboutPage from '../pages/InspiredAboutPage';
import InspiredWorkPage from '../pages/InspiredWorkPage';
import InspiredProjectsPage from '../pages/InspiredProjectsPage';
import InspiredProjectDetailPage from '../pages/InspiredProjectDetailPage';
import InspiredContactPage from '../pages/InspiredContactPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CleanHomePage />} />
      <Route path="/about" element={<InspiredAboutPage />} />
      <Route path="/work" element={<InspiredWorkPage />} />
      <Route path="/projects" element={<InspiredProjectsPage />} />
      <Route path="/projects/:id" element={<InspiredProjectDetailPage />} />
      <Route path="/contact" element={<InspiredContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
