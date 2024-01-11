import React from 'react';
import './App.scss';
import NavBar from './Navbar';
import TopBar from './TopBar';

function App() {
  return (
    <div className="bg-slate-100 w-full h-full">
      <TopBar />
      <NavBar />
    </div>
  );
}

export default App;