import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './Firebase';
import './styles/app.css';
import logo from './assets/logo.png';
import SocialLinks from './SocialLinks';


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
            Popular&nbsp;content
          </h2>
          <ul className="sidebar-list">
            <li>➡️ Design</li>
            <li>➡️ Product</li>
            <li>➡️ Software Engineering</li>
            <li>➡️ Customer Success</li>
            <li>➡️ Leadership</li>
            <li>➡️ Management</li>
          </ul>
        </aside>

        {/* Content */}
        <div className="content">
          <div className="tag">Recently Published</div>

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
     <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <h2>Let’s Connect Here</h2>

          <SocialLinks />
          <p>
            Feel free to connect with me on the above social media platforms.
            I'm here to engage, collaborate, and share exciting ideas!
          </p>
          <p className='logo'>Antony</p>
        </div>
        <div className='footer-right'>
          <div className='footer-contact'>
            <h4>Contact</h4>
            <p>
              Phone: <a href='tel:+254115423788'>+254 115 423 788</a>
            </p>
            <p>
              <a href='mailto:antonytitan96@.com'>antonytitan96@gmail.com</a>
            </p>
            <p>
              <a
                href='https:/antonykinuthia.xyz'
                target='_blank'
                rel='noopener noreferrer'
              >
                https:/antonykinuthia.xyz
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default DesignJournal;

