import React from 'react';
import UserNav from './UserNav';
import Footer from './Footer';
import QuotesAuthor from './QuotesAuthor';
import MusashiBg from '../assets/images/musashi-bg.png';
import Post from './Post';
import Like from "../assets/images/like.png";

const UserPage = () => {
  return (
    <section id="index">
      <UserNav />
      <section id="main">
        <div className="the-goals">
          <div className="goals-text">
            <h1 className="main-goals">Find Your <span>Way</span></h1>
            <p>
              Embark on a journey of self-discovery and growth. Like a sword shaped by fire, we are refined by daily actions and dedication. At Kaizen, find the insights and principles to guide you toward becoming your best self, one step at a time.
            </p>          </div>
          <div className="goals-img">
            <img src={MusashiBg} alt="samurai with sword" />
          </div>
        </div>
      </section>
      <section>
        <QuotesAuthor />
      </section>

      <section className="index-blog">
        <h1>Blo<span>gs</span></h1>
        <Post />
        <section className="blog-grid">
          <div className="blog-posts">
            <div className="blog-post">
              <h2>Exploring the Art of War</h2>
              <p>Sun Tzu's principles emphasize strategy, planning, and psychological warfare. Understanding your enemy is key to victory.</p>
            </div>
            <div className="blog-post-footer">
              <p className="author">- Sun Tzu</p>
              <div className="right-blog-footer">
                <div className="red-circle"></div>
                <img src={Like} alt="like" />
              </div>
            </div>
          </div>

          <div className="blog-posts">
            <div className="blog-post">
              <h2>The Way of the Samurai</h2>
              <p>Samurai embody honor, discipline, and skill. Their way of life teaches us about resilience and the pursuit of mastery.</p>
            </div>
            <div className="blog-post-footer">
              <p className="author">- Miyamoto Musashi</p>
              <div className="right-blog-footer">
                <div className="red-circle"></div>
                <img src={Like} alt="like" />
              </div>
            </div>
          </div>

          <div className="blog-posts">
            <div className="blog-post">
              <h2>Lessons from the Zen Garden</h2>
              <p>A Zen garden offers a space for reflection and tranquility, reminding us of the importance of simplicity and balance in our lives.</p>
            </div>
            <div className="blog-post-footer">
              <p className="author">- Thich Nhat Hanh</p>
              <div className="right-blog-footer">
                <div className="red-circle"></div>
                <img src={Like} alt="like" />
              </div>
            </div>
          </div>

          <div className="blog-posts">
            <div className="blog-post">
              <h2>The Philosophy of Nature</h2>
              <p>Nature teaches us resilience and adaptability. Observing its cycles can inspire us to embrace change and uncertainty.</p>
            </div>
            <div className="blog-post-footer">
              <p className="author">- Lao Tzu</p>
              <div className="right-blog-footer">
                <div className="red-circle"></div>
                <img src={Like} alt="like" />
              </div>
            </div>
          </div>
        </section>

      </section>
      <Footer />

    </section>


  )
}

export default UserPage
