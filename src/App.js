import React from 'react';
import pic1 from './assets/pic_7.jpeg';
import pic2 from './assets/pic_2.jpeg';
import pic3 from './assets/pic_3.jpeg';
import pic4 from './assets/pic_4.jpeg';
import pic5 from './assets/pic_5.jpeg';
import pic6 from './assets/pic_6.jpeg';

const DesignJournal = () => {
  return (
    <div className="design-journal">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">Untitled UI</span>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">Solutions</a>
          <a href="#" className="nav-link">Pricing</a>
          <a href="#" className="nav-link">Resources</a>
          <a href="#" className="nav-link">Company</a>
          <a href="#" className="nav-link">Careers</a>
        </nav>
        <button className="get-started-btn">Get started</button>
        <button className="menu-btn">☰</button>
      </header>

      {/* Main content */}
      <main className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2 className="sidebar-title">
            <div className="sidebar-icon"></div>
            View all
          </h2>
          <ul className="sidebar-list">
            <li>Design</li>
            <li>Product</li>
            <li>Software Engineering</li>
            <li>Customer Success</li>
            <li>Leadership</li>
            <li>Management</li>
          </ul>
        </aside>

        {/* Content */}
        <div className="content">
          <div className="tag">Design Journal</div>
          <h1 className="main-title">Inside Design: Stories and interviews</h1>
          <p className="subtitle">
            Subscribe for the latest design trends, design software and releases, and exclusive interviews with design leaders.
          </p>

          {/* Featured article */}
          <div className="featured-article">
            <div className="featured-image">
              <img src={pic1} alt="Featured article" />
            </div>
            <div className="featured-content">
              <h2 className="featured-title">2030: Maya Louvière on IPOs, The No Code Movement & Offending People With The Future</h2>
              <p className="featured-text">
                Turns out, predicting the future can offend people, even if it turn. In 2019, we interviewed Maya Sveltman who predicted, "Learning to code will eventually be as useful as learning Ancient Greek." Today, learning to code is being over-promised as a silver bullet for long-term career success. We chatted to her about her 2030 predictions.
              </p>
              <div className="author-info">
                <img src={pic2} alt="Author" className="author-image" />
                <span className="author-name">Amélie Laurent</span>
                <span className="publish-date">20 Jan 2024</span>
              </div>
            </div>
          </div>

          {/* Other articles */}
          <div className="articles-grid">
            <div className="article">
              <img src={pic3} alt="Article 1" className="article-image" />
              <h3 className="article-title">Cognitive Dissonance Theory: Crash Course for UX Designers</h3>
              <p className="article-excerpt">We all like to think of ourselves in certain ways. We consider ourselves to be truthful, hard-working, health-conscious, and in cont...</p>
              <div className="author-info">
                <img src={pic4} alt="Author" className="author-image" />
                <span className="author-name">Alex Whitten</span>
                <span className="publish-date">17 Jan 2024</span>
              </div>
            </div>
            <div className="article">
              <img src={pic6} alt="Article 2" className="article-image" />
              <h3 className="article-title">Exclusive Interview with New York Product Designer, Jasmin Chew</h3>
              <p className="article-excerpt">Jasmin Chew is a 23-year-old photographer and photo editor from Toronto, Ontario. She has worked with Spotify, Nike, Cheers, Maker...</p>
              <div className="author-info">
                <img src={pic5} alt="Author" className="author-image" />
                <span className="author-name">Derek Wilkinson</span>
                <span className="publish-date">16 Jan 2024</span>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button className="pagination-btn">← Previous</button>
            <button className="pagination-btn">Next →</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title">Product</h3>
            <ul className="footer-list">
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-list">
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Media kit</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-list">
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help centre</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Social</h3>
            <ul className="footer-list">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>GitHub</li>
              <li>AngelList</li>
              <li>Dribbble</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-list">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Licenses</li>
              <li>Settings</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .design-journal {
          font-family: sans-serif;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid #e5e5e5;
        }

        .logo {
          display: flex;
          align-items: center;
        }

        .logo-icon {
          width: 1.5rem;
          height: 1.5rem;
          background-color: black;
          margin-right: 0.5rem;
        }

        .logo-text {
          font-weight: 600;
        }

        .nav {
          display: none;
        }

        .nav-link {
          margin-left: 1rem;
          text-decoration: none;
          color: black;
        }

        .get-started-btn {
          display: none;
          padding: 0.5rem 1rem;
          background-color: black;
          color: white;
          border: none;
          border-radius: 4px;
        }

        .menu-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
        }

        .main-content {
          display: flex;
          flex-grow: 1;
        }

        .sidebar {
          display: none;
          width: 35%;
          padding: 2rem;
          border-right: 1px solid #e5e5e5;
        }

        .sidebar-title {
          display: flex;
          align-items: center;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .sidebar-icon {
          width: 1rem;
          height: 1rem;
          background-color: black;
          margin-right: 0.5rem;
        }

        .sidebar-list {
          list-style-type: none;
          padding: 0;
        }

        .sidebar-list li {
          margin-bottom: 0.5rem;
        }

        .content {
          width: 100%;
          padding: 2rem;
        }

        .tag {
          display: inline-block;
          padding: 0.25rem 0.5rem;
          background-color: #f3f4f6;
          border-radius: 9999px;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .main-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .subtitle {
          color: #6b7280;
          margin-bottom: 2rem;
        }

        .featured-article {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }

        .featured-image img {
          width: 100%;
          max-height: 40%;
          object-fit: cover;
        }

        .featured-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .featured-text {
          color: #6b7280;
          margin-bottom: 1rem;
        }

        .author-info {
          display: flex;
          align-items: center;
        }

        .author-image {
          width: 2rem;
          height: 2rem;
          border-radius: 9999px;
          margin-right: 0.5rem;
        }

        .author-name {
          font-size: 0.875rem;
          margin-right: 0.5rem;
        }

        .publish-date {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .articles-grid {
          display: grid;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .article-image {
          width: 100%;
          height: 12rem;
          object-fit: cover;
          margin-bottom: 1rem;
        }

        .article-title {
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .article-excerpt {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 1rem;
        }

        .pagination {
          display: flex;
          justify-content: space-between;
        }

        .pagination-btn {
          background: none;
          border: none;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
        }

        .footer {
          background-color: #fef08a;
          padding: 2rem;
        }

        .footer-grid {
          display: grid;
          gap: 2rem;
        }

        .footer-title {
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .footer-list {
          list-style-type: none;
          padding: 0;
        }

        .footer-list li {
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        @media (min-width: 768px) {
          .nav {
            display: flex;
          }

          .get-started-btn {
            display: block;
          }

          .menu-btn {
            display: none;
          }

          .sidebar {
            display: block;
          }

          .content {
            width: 65%;
          }

          .featured-article {
            flex-direction: row;
            gap: 2rem;
          }

          .featured-image {
            flex: 1;
          }

          .featured-content {
            flex: 1;
          }

          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .main-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DesignJournal;