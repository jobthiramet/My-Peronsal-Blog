import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>Stay<br />Informed,<br />Stay Inspired</h1>
        <p>Discover deep dives into cinema, hidden gems, and honest takes on your favorite films. Your daily dose of movie analysis.</p>
      </div>
      <div className="hero-middle">
        <img src="/posters/obsession.jpg" alt="Obsession movie poster" />
      </div>
      <div className="hero-right">
        <span className="author-label">-Featured Film</span>
        <h2>Obsession</h2>
        <p>A gripping psychological thriller that keeps you guessing. Dive deep into the dark corners of human desire and obsession as tension builds with every unpredictable turn.</p>
        <p>Thompson P. explores why this film delivers a masterclass in suspense, tension-building, and storytelling that lingers long after the credits roll.</p>
      </div>
    </section>
  );
}
