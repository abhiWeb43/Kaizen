import React from 'react';
import Nav from './Nav';
import MusashiBg from '../assets/images/musashi-bg.png';
import Footer from './Footer';
import Socrates from '../assets/images/selfSocrate.jpg';
import Gratitude from '../assets/images/gratitude.jpg';
import Mind from "../assets/images/mind.jpg";
import Relation from "../assets/images/relation.jpg";
import Fear from "../assets/images/fear.jpg";
import Positive from "../assets/images/positive.jpg";

const SelfHelp = () => {
  return (
    <section>
      <Nav />
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

      <section className="blog-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Categories</h3>
          <ul>
            <li>Philosophy</li>
            <li>Productivity</li>
            <li>Communication</li>
            <li>Finance</li>
            <li>Motivation</li>
            <li>Fittness</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="help-flex">

            <div className="blog-posts">
              <div className="blog-post self-post">
                <div className="blog-post-text">
                  <h2>Finding Your Inner Strength</h2>
                  <p>Every individual has the potential to overcome challenges. This journey of self-discovery helps you tap into your inner resilience, pushing through adversity and emerging stronger than before.</p>
                </div>
                <img src={Socrates} alt="socrates" />
              </div>
              <div className="blog-post-footer">
                <p className="author">- Miyamoto Musashi</p>
                <div className="right-blog-footer">
                  <div className="red-circle"></div>
                </div>
              </div>
            </div>

            <div className="blog-posts">
              <div className="blog-post self-post">
                <div className="blog-post-text">
                  <h2>The Power of Mindfulness</h2>
                  <p>Practicing mindfulness allows you to stay grounded in the present moment. Discover techniques to cultivate awareness and reduce anxiety, leading to a more balanced and fulfilling life.</p>
                </div>
                <img src={Mind} alt="socrates" />
              </div>
              <div className="blog-post-footer">
                <p className="author">- Thich Nhat Hanh</p>
                <div className="right-blog-footer">
                  <div className="red-circle"></div>
                </div>
              </div>
            </div>

            <div className="blog-posts">
              <div className="blog-post self-post">
                <div className="blog-post-text">
                  <h2>Setting Effective Goals</h2>
                  <p>Learn how to set SMART goals that inspire action and help you track your progress. Turning your aspirations into actionable steps can lead to significant personal growth.</p>
                </div>
                <img src={MusashiBg} alt="socrates" />
              </div>
              <div className="blog-post-footer">
                <p className="author">- Jim Rohn</p>
                <div className="right-blog-footer">
                  <div className="red-circle"></div>
                </div>
              </div>
            </div>

            <div className="blog-posts">
              <div className="blog-post self-post">
                <div className="blog-post-text">
                  <h2>Embracing Change</h2>
                  <p>Change can be daunting, but it often leads to growth. Learn strategies to embrace transitions in life and view them as opportunities rather than obstacles.</p>
                </div>
                <img src={Mind} alt="socrates" />
              </div>
              <div className="blog-post-footer">
                <p className="author">- William Bridges</p>
                <div className="right-blog-footer">
                  <div className="red-circle"></div>
                </div>
              </div>
            </div>

            <div className="blog-posts">
              <div className="blog-post self-post">
                <div className="blog-post-text">
                  <h2>The Importance of Gratitude</h2>
                  <p>Practicing gratitude can shift your mindset and improve your overall well-being. Explore ways to incorporate gratitude into your daily routine for a more positive outlook on life.</p>
                </div>
                <img src={Gratitude} alt="socrates" />
              </div>
              <div className="blog-post-footer">
                <p className="author">- Robert Emmons</p>
                <div className="right-blog-footer">
                  <div className="red-circle"></div>
                </div>
              </div>
            </div>

            <div className="blog-posts">
              <div className="blog-post self-post">
                <div className="blog-post-text">
                  <h2>Building Healthy Relationships</h2>
                  <p>Healthy relationships are vital for our emotional well-being. Discover tips on how to communicate effectively, set boundaries, and nurture your connections with others.</p>
                </div>
                <img src={Relation} alt="socrates" />
              </div>
              <div className="blog-post-footer">
                <p className="author">- Brené Brown</p>
                <div className="right-blog-footer">
                  <div className="red-circle"></div>
                </div>
              </div>
            </div>

            <div className="blog-posts">
              <div className="blog-post self-post">
                <div className="blog-post-text">
                  <h2>The Art of Self-Reflection</h2>
                  <p>Self-reflection is crucial for personal growth. Learn how to ask the right questions and gain insights into your thoughts and behaviors to foster continuous improvement.</p>
                </div>
                <img src={Socrates} alt="socrates" />
              </div>
              <div className="blog-post-footer">
                <p className="author">- Socrates</p>
                <div className="right-blog-footer">
                  <div className="red-circle"></div>
                </div>
              </div>
            </div>

            <div className="blog-posts">
              <div className="blog-post self-post">
                <div className="blog-post-text">
                  <h2>Overcoming Fear and Anxiety</h2>
                  <p>Fear and anxiety can hold us back from achieving our dreams. Explore techniques to manage these emotions and transform them into tools for growth and empowerment.</p>
                </div>
                <img src={Fear} alt="socrates" />
              </div>
              <div className="blog-post-footer">
                <p className="author">- Susan Jeffers</p>
                <div className="right-blog-footer">
                  <div className="red-circle"></div>
                </div>
              </div>
            </div>

            <div className="blog-posts">
              <div className="blog-post self-post">
                <div className="blog-post-text">
                  <h2>Creating a Positive Mindset</h2>
                  <p>A positive mindset can change your life. Discover strategies for cultivating positivity, overcoming negativity, and fostering resilience in challenging times.</p>
                </div>
                <img src={Positive} alt="socrates" />
              </div>
              <div className="blog-post-footer">
                <p className="author">- Norman Vincent Peale</p>
                <div className="right-blog-footer">
                  <div className="red-circle"></div>
                </div>
              </div>
            </div>
          </div>


        </main>
      </section>

      <Footer />
    </section>
  )
}

export default SelfHelp
