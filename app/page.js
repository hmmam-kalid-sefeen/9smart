const LINKS = [
  {
    title: "Ultimate Guide to iOS 26.4",
    description: "Key hidden features, battery improvements, and performance updates.",
    url: "https://9smart.buzz",
    tag: "Featured Guide",
  },
  {
    title: "Best Power Banks 2026",
    description: "Quick comparison of top portable chargers, capacities, and value.",
    url: "https://9smart.buzz",
    tag: "Product Review",
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

export default function HomePage() {
  return (
    <main className="container">
      <header className="profile">
        <div className="avatar">9S</div>
        <h1>9smart</h1>
        <p>Curated product links and tech reviews — fast access with no annoying ads.</p>
      </header>

      <section className="links-list" aria-label="9smart links">
        {LINKS.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            <div className="link-header">
              <span className="tag">{item.tag}</span>
              <h2>{item.title}</h2>
            </div>
            <p>{item.description}</p>
          </a>
        ))}
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} 9smart — 9smart.buzz</p>
      </footer>
    </main>
  );
}
