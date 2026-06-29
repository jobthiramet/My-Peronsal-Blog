import React, { useState } from 'react';
import BlogCard from './BlogCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import obsessionPoster from '../assets/posters/obsession.jpg';
import interstellarPoster from '../assets/posters/interstellar.jpg';
import martySupremePoster from '../assets/posters/marty-supreme.jpg';
import drivePoster from '../assets/posters/drive.jpg';
import uncutGemsPoster from '../assets/posters/uncut-gems.jpg';
import nopePoster from '../assets/posters/nope.jpg';
import usPoster from '../assets/posters/us.jpg';

const categories = ['All Reviews', 'Thriller', 'Sci-Fi', 'Horror'];

const moviesData = [
  {
    id: 1,
    image: obsessionPoster,
    tag: 'Thriller',
    title: 'Obsession: A Gripping Psychological Thriller That Keeps You Guessing',
    description:
      'Dive deep into the dark corners of human desire and obsession. This film delivers a masterclass in suspense, tension-building, and an unpredictable plot that...',
    author: 'Thompson P.',
    date: '22 June 2026',
  },
  {
    id: 2,
    image: interstellarPoster,
    tag: 'Sci-Fi',
    title: 'Interstellar: A Mind-Bending Masterpiece of Space and Time',
    description:
      "Christopher Nolan's sci-fi epic remains a monumental achievement. Blending hard science with a deeply emotional core, it explores love's power across dimensions and...",
    author: 'Thompson P.',
    date: '20 June 2026',
  },
  {
    id: 3,
    image: martySupremePoster,
    tag: 'Drama',
    title: 'Marty Supreme: A Stylish and Energetic Look at Subculture',
    description:
      'An extraordinary journey through a unique world. With brilliant performances and a sharp, witty script, this movie manages to turn an unexpected sport into an engaging...',
    author: 'Thompson P.',
    date: '18 June 2026',
  },
  {
    id: 4,
    image: drivePoster,
    tag: 'Action',
    title: 'Drive: Neon-Drenched Noir with a Stunning Atmospheric Style',
    description:
      'A silent driver, a killer soundtrack, and beautiful hyper-violence. Nicolas Winding Refn’s masterpiece blends arthouse aesthetic with classic Hollywood action perfectly...',
    author: 'Thompson P.',
    date: '15 June 2026',
  },
  {
    id: 5,
    image: uncutGemsPoster,
    tag: 'Thriller',
    title: 'Uncut Gems: An Anxiety-Inducing Masterclass in Suspense',
    description:
      "Adam Sandler delivers a career-defining performance in this chaotic, high-stakes thriller. It's a relentless 2-hour panic attack that you simply cannot look away from...",
    author: 'Thompson P.',
    date: '12 June 2026',
  },
  {
    id: 6,
    image: nopePoster,
    tag: 'Horror',
    title: 'Nope: Jordan Peele’s Spectacular Sci-Fi Horror Spectacle',
    description:
      "What lies above the clouds? Peele reimagines the classic UFO movie into a chilling critique of spectacle culture, exploitation, and humanity's obsession with capturing the unseen...",
    author: 'Thompson P.',
    date: '10 June 2026',
  },
  {
    id: 7,
    image: usPoster,
    tag: 'Horror',
    title: 'Us: A Terrifying and Thought-Provoking Doppelgänger Nightmare',
    description:
      'We are our own worst enemy. Jordan Peele delivers a stunningly creepy, metaphorical look at societal division through the lens of terrifying underground doppelgängers...',
    author: 'Thompson P.',
    date: '08 June 2026',
  },
];

export default function LatestArticles() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredMovies = moviesData.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
    const matchesCategory =
      selectedCategory === 'All Reviews' || movie.tag === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="articles-section">
      <h2>Latest Movie Reviews</h2>

      <div className="filter-bar filter-bar-desktop">
        <div className="tabs">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={selectedCategory === category ? 'tab active' : 'tab'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="filter-bar-mobile">
        <div className="search-box mobile-search">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
        <div className="category-field">
          <label className="category-label" htmlFor="category-select">
            Category
          </label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger id="category-select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="articles-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => <BlogCard key={movie.id} {...movie} />)
        ) : (
          <p className="no-results">No movies found. Try a different search or category.</p>
        )}
      </div>
    </section>
  );
}
