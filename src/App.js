import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './Firebase';
import './styles/app.css';
import logo from './assets/logo.png';


const DesignJournal = () => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
   const fetchArticles = async () => {
  try {
    const articlesCollection = collection(db, 'article');
    const articlesSnapshot = await getDocs(articlesCollection);
    
    // Log the snapshot to see what's returned
    console.log("Snapshot: ", articlesSnapshot);

    if (!articlesSnapshot.empty) {
      const articlesList = articlesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("Articles List: ", articlesList);
      setFeaturedArticle(articlesList[0]);
      setArticles(articlesList.slice(1));
    } else {
      console.log("No documents found");
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};


    fetchArticles();
  }, []);

  
  const testFetchById = async () => {
  try {
    const docRef = doc(db, 'article', '5h2vfbMfUTilrgkvoiPn');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
};

testFetchById();



  return (
    <div className="design-journal">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon">
            <img src={logo} alt="titan logo"/>
          </div>
          
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Latest</a>
          <a href="#" className="nav-link">React</a>
          <a href="#" className="nav-link">AI</a>
          <a href="#" className="nav-link">Flutter</a>
          <a href="#" className="nav-link">My 30 Day Plan</a>
        </nav>
        <button className="get-started-btn" onClick={() => window.location.href = 'https://antonykinuthia.xyz'}>
    My Website
</button>

        {/* <button className="menu-btn">☰</button> */}
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
          {featuredArticle && (
            <div className="featured-article">
              <div className="featured-image">
                <img src={featuredArticle.imageUrl} alt="Featured article" />
              </div>
              <div className="featured-content">
                <h2 className="featured-title">{featuredArticle.title}</h2>
                <p className="featured-text">{featuredArticle.excerpt}</p>
                <div className="author-info">
                  <img src={featuredArticle.subImageUrl} alt="Author" className="author-image" />
                  <span className="author-name">{featuredArticle.subTitle}</span>
                  {/* <span className="publish-date">{featuredArticle.publishDate}</span> */}
                </div>
              </div>
            </div>
          )}

          {/* Other articles */}
          <div className="articles-grid">
            {articles.map(article => (
              <div key={article.id} className="article">
                <img src={article.imageUrl} alt={article.title} className="article-image" />
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="author-info">
                  <img src={article.authorImageUrl} alt="Author" className="author-image" />
                  <span className="author-name">{article.authorName}</span>
                  {/* <span className="publish-date">{article.publishDate}</span> */}
                </div>
              </div>
            ))}
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
    </div>
  );
};

export default DesignJournal;

