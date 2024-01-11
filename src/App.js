import React from 'react';
import './App.scss';
import NavBar from './components/Navbar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="bg-slate-100 w-full h-full">
      <TopBar />
      <NavBar />
    </div>
  );
}

export default App;