import React from 'react';
import './App.scss';
import NavBar from './components/Navbar';
import News from './pages/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateArticle from './pages/CreateArticle';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="bg-slate-100 w-full h-full">
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/create" element={<CreateArticle />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;