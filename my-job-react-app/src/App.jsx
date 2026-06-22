import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import LatestArticles from './components/LatestArticles';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main>
        <HeroSection />
        <LatestArticles />
      </main>
    </div>
  );
}