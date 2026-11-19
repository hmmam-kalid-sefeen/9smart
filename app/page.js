"use client";

import { useState } from "react";

const LINKS = [
  {
    title: "Ultimate Guide to iOS 26.4",
    description: "Key hidden features, battery improvements, and performance updates.",
    url: "https://9smart.buzz/posts/ultimate-guide-ios-26-4",
    tag: "Featured Guide",
    badge: "NEW",
  },
  {
    title: "Best Power Banks 2026",
    description: "Quick comparison of top portable chargers, capacities, and value.",
    url: "https://9smart.buzz",
    tag: "Product Review",
    badge: "TOP",
  },
  {
    title: "Smart Glasses & Wearable Future",
    description: "A closer look at the latest wearable tech and everyday use cases.",
    url: "https://9smart.buzz",
    tag: "Tech",
  },
  {
    title: "Avoid Smartphone Overheating",
    description: "Practical steps to keep your phone cool and protect battery health.",
    url: "https://9smart.buzz",
    tag: "Tips",
  },
];

const CATEGORIES = ["All", "Featured Guide", "Product Review", "Tech", "Tips"];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredLinks =
    activeCategory === "All"
      ? LINKS
      : LINKS.filter((item) => item.tag === activeCategory);

  return (
    <main className="page-wrapper">
      <div className="ambient-glow" aria-hidden="true" />

      <div className="container">
        <header className="profile">
          <div className="logo-ring">
            <img
              src="/Logo.png"
              alt="9smart logo"
              className="logo-img"
            />
          </div>

          <div className="title-row">
            <h1>9smart</h1>
            <span className="verified-dot" title="Verified Hub">✓</span>
          </div>

          <p className="bio">
            Curated product links and smart tech reviews — fast access with no annoying ads.
          </p>
        </header>

        <nav className="filter-bar" aria-label="Filter links by category">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`filter-pill ${activeCategory === category ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </nav>

        <section className="links-list" aria-label="9smart links">
          {filteredLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className="card-top">
                <span className="tag">{item.tag}</span>
                {item.badge && <span className="hot-badge">{item.badge}</span>}
              </div>

              <div className="card-body">
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <span className="arrow-icon" aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} 9smart — 9smart.buzz</p>
        </footer>
      </div>
    </main>
  );
}
