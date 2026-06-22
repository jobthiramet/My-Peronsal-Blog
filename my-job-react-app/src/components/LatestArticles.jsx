import React from 'react';

function ArticleCard({ image, tag, title, description, author, date }) {
  return (
    <div className="article-card">
      <img src={image} alt={title} className="card-image" />
      <span className="card-tag">{tag}</span>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      <div className="card-footer">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&auto=format&fit=crop&q=80" alt={author} className="author-avatar" />
        <span className="author-name">{author}</span>
        <span className="divider">|</span>
        <span className="post-date">{date}</span>
      </div>
    </div>
  );
}

const moviesData = [
  {
    id: 1,
    /* 💡 จุดเช็กสำคัญ: ถ้ารูปยังไม่ขึ้น ให้ลองเปลี่ยนตรงนี้ให้ตรงกับชื่อไฟล์จริงในเครื่อง เช่น:
      - "/posters/obssesion.jpg"  (มี s สองตัวข้างหน้า)
      - "/posters/obsession.png"  (กรณีไฟล์จริงเป็น PNG)
      - "/posters/Obsession.jpg"  (กรณีขึ้นต้นด้วยตัวพิมพ์ใหญ่)
    */
    image: "/posters/obsession.jpg", 
    tag: "Thriller",
    title: "Obsession: A Gripping Psychological Thriller That Keeps You Guessing",
    description: "Dive deep into the dark corners of human desire and obsession. This film delivers a masterclass in suspense, tension-building, and an unpredictable plot that...",
    author: "Thompson P.",
    date: "22 June 2026"
  },
  {
    id: 2,
    image: "/posters/interstellar.jpg",
    tag: "Sci-Fi",
    title: "Interstellar: A Mind-Bending Masterpiece of Space and Time",
    description: "Christopher Nolan's sci-fi epic remains a monumental achievement. Blending hard science with a deeply emotional core, it explores love's power across dimensions and...",
    author: "Thompson P.",
    date: "20 June 2026"
  },
  {
    id: 3,
    image: "/posters/marty-supreme.jpg",
    tag: "Drama",
    title: "Marty Supreme: A Stylish and Energetic Look at Subculture",
    description: "An extraordinary journey through a unique world. With brilliant performances and a sharp, witty script, this movie manages to turn an unexpected sport into an engaging...",
    author: "Thompson P.",
    date: "18 June 2026"
  },
  {
    id: 4,
    image: "/posters/drive.jpg",
    tag: "Action",
    title: "Drive: Neon-Drenched Noir with a Stunning Atmospheric Style",
    description: "A silent driver, a killer soundtrack, and beautiful hyper-violence. Nicolas Winding Refn’s masterpiece blends arthouse aesthetic with classic Hollywood action perfectly...",
    author: "Thompson P.",
    date: "15 June 2026"
  },
  {
    id: 5,
    image: "/posters/uncut-gems.jpg",
    tag: "Thriller",
    title: "Uncut Gems: An Anxiety-Inducing Masterclass in Suspense",
    description: "Adam Sandler delivers a career-defining performance in this chaotic, high-stakes thriller. It’s a relentless 2-hour panic attack that you simply cannot look away from...",
    author: "Thompson P.",
    date: "12 June 2026"
  },
  {
    id: 6,
    image: "/posters/nope.jpg",
    tag: "Horror",
    title: "Nope: Jordan Peele’s Spectacular Sci-Fi Horror Spectacle",
    description: "What lies above the clouds? Peele reimagines the classic UFO movie into a chilling critique of spectacle culture, exploitation, and humanity's obsession with capturing the unseen...",
    author: "Thompson P.",
    date: "10 June 2026"
  },
  {
    id: 7,
    image: "/posters/us.jpg",
    tag: "Horror",
    title: "Us: A Terrifying and Thought-Provoking Doppelgänger Nightmare",
    description: "We are our own worst enemy. Jordan Peele delivers a stunningly creepy, metaphorical look at societal division through the lens of terrifying underground doppelgängers...",
    author: "Thompson P.",
    date: "08 June 2026"
  }
];

export default function LatestArticles() {
  return (
    <section className="articles-section">
      <h2>Latest Movie Reviews</h2>
      
      <div className="filter-bar">
        <div className="tabs">
          <button className="tab active">All Reviews</button>
          <button className="tab">Thriller</button>
          <button className="tab">Sci-Fi</button>
          <button className="tab">Horror</button>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search movies..." />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="articles-grid">
        {moviesData.map(movie => (
          <ArticleCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
}