import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import CreateArticle from './pages/CreateArticle';
import News from './pages/News';
import Profile from './pages/Profile';
import ViewArticle from './pages/ViewArticle';

function App() {
  return (
    <Router>
      <div className="w-full min-h-svh flex flex-col justify-between">
        <Routes>
          <Route path="/InformationStream" element={<News />} />
          <Route path="/InformationStream/create" element={<CreateArticle />} />
          <Route path="/InformationStream/profile" element={<Profile />} />
          <Route path="/InformationStream/article/:id" element={<ViewArticle />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;