import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import { HomePage } from './components/HomePage/HomePage';
import { ProjectsPage } from './components/ProjectsPage/ProjectsPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="projects">
          <Route index element={<ProjectsPage />} />
          {/* <Route path=":productId" element={<ProductDetailsPage />} /> */}
        </Route>
      </Route>
    </Routes>
  </Router>
);
