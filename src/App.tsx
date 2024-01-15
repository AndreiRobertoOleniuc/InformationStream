import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import CreateArticle from './pages/CreateArticle';
import News from './pages/News';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="w-full min-h-svh flex flex-col justify-between">
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