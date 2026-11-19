* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #060913;
  color: #f8fafc;
  min-height: 100vh;
  overflow-x: hidden;
}

.page-wrapper {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 3rem 1.25rem 2.5rem;
}

/* إضاءة خلفية ناعمة وعصرية */
.ambient-glow {
  position: fixed;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 540px;
  height: 320px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(139, 92, 246, 0.12) 45%, transparent 75%);
  filter: blur(50px);
  pointer-events: none;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 640px;
}

/* الهيدر والشعار */
.profile {
  text-align: center;
  margin-bottom: 2rem;
}

.logo-ring {
  width: 96px;
  height: 96px;
  margin: 0 auto 1.1rem;
  padding: 3px;
  border-radius: 50%;
  background: linear-gradient(135deg, #38bdf8, #818cf8, #c084fc);
  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.22);
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background: #0f172a;
  display: block;
}

.title-row {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.5rem;
}

.profile h1 {
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(to right, #ffffff, #cbd5e1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.verified-dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #3b82f6;
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 700;
}

.bio {
  color: #94a3b8;
  font-size: 0.98rem;
  line-height: 1.6;
  max-width: 460px;
  margin: 0 auto;
}

/* شريط التصنيفات */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
}

.filter-pill {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.16);
  color: #94a3b8;
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-pill:hover {
  color: #f8fafc;
  border-color: rgba(56, 189, 248, 0.45);
}

.filter-pill.active {
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  color: #ffffff;
  border-color: transparent;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
}

/* بطاقات الروابط */
.links-list {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
}

.link-card {
  display: block;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 18px;
  padding: 1.25rem 1.35rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
}

.link-card:hover {
  transform: translateY(-3px);
  background: rgba(30, 41, 59, 0.78);
  border-color: rgba(56, 189, 248, 0.55);
  box-shadow: 0 12px 28px rgba(2, 6, 23, 0.55);
}

.card-top {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.55rem;
}

.tag {
  font-size: 0.74rem;
  font-weight: 600;
  background: rgba(56, 189, 248, 0.12);
  color: #38bdf8;
  padding: 0.22rem 0.65rem;
  border-radius: 999px;
}

.hot-badge {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: rgba(168, 85, 247, 0.18);
  color: #d8b4fe;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
}

.card-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.link-card h2 {
  font-size: 1.12rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: #f1f5f9;
}

.link-card p {
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.5;
}

.arrow-icon {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(148, 163, 184, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #94a3b8;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.link-card:hover .arrow-icon {
  background: #3b82f6;
  color: #ffffff;
  transform: translate(2px, -2px);
}

.footer {
  text-align: center;
  margin-top: 2.75rem;
  color: #64748b;
  font-size: 0.84rem;
}
