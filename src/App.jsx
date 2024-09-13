import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './test/Sidebar';
import SubPages from './test/SubPages';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar /> {/* Sidebar with links */}
        <div className="page-content">
          <Routes>
            {/* Define the route for each page */}
            <Route path="/pages" element={<SubPages />} />
            {/* Add more routes for other pages */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
