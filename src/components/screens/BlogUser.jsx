import React from 'react';
import Nav from './UserNav';
import Post from './Post';
import Like from "../assets/images/like.png";
import Footer from './Footer';

const BlogUser = () => {
    return (
        <section>
            <Nav />

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
                    {/* Show the Post component only if the user is logged in */}
                    <Post />
                    <section className="blog-grid">
                        <div className="blog-posts">
                            <div className="blog-post">
                                <h2>The Art of Patience in Progress</h2>
                                <p>Embrace each step, no matter how small. Patience is the foundation of true progress in personal growth.</p>
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
                                <h2>Small Changes, Big Impact</h2>
                                <p>Kaizen teaches us that improvement doesn't have to be drastic to be effective; small, consistent changes lead to success.</p>
                            </div>
                            <div className="blog-post-footer">
                                <p className="author">- Akira Tanaka</p>
                                <div className="right-blog-footer">
                                    <div className="red-circle"></div>
                                    <img src={Like} alt="like" />
                                </div>
                            </div>
                        </div>

                        <div className="blog-posts">
                            <div className="blog-post">
                                <h2>Embracing Failure as Growth</h2>
                                <p>Failure is a stepping stone to wisdom. Use it to refine your path and deepen your resolve to achieve more.</p>
                            </div>
                            <div className="blog-post-footer">
                                <p className="author">- Yuki Harada</p>
                                <div className="right-blog-footer">
                                    <div className="red-circle"></div>
                                    <img src={Like} alt="like" />
                                </div>
                            </div>
                        </div>

                        <div className="blog-posts">
                            <div className="blog-post">
                                <h2>The Power of Consistency</h2>
                                <p>Success is not achieved overnight but through persistent effort. Consistency is the backbone of any accomplishment.</p>
                            </div>
                            <div className="blog-post-footer">
                                <p className="author">- Sakura Ishikawa</p>
                                <div className="right-blog-footer">
                                    <div className="red-circle"></div>
                                    <img src={Like} alt="like" />
                                </div>
                            </div>
                        </div>

                        <div className="blog-posts">
                            <div className="blog-post">
                                <h2>Transforming Habits with Kaizen</h2>
                                <p>Break down big goals into manageable habits. Kaizen shows us how to make lasting changes that stick.</p>
                            </div>
                            <div className="blog-post-footer">
                                <p className="author">- Takashi Sato</p>
                                <div className="right-blog-footer">
                                    <div className="red-circle"></div>
                                    <img src={Like} alt="like" />
                                </div>
                            </div>
                        </div>

                        <div className="blog-posts">
                            <div className="blog-post">
                                <h2>Mindfulness in Daily Practice</h2>
                                <p>Mindfulness amplifies awareness, allowing us to fully appreciate the present moment and learn from every experience.</p>
                            </div>
                            <div className="blog-post-footer">
                                <p className="author">- Kenji Matsuda</p>
                                <div className="right-blog-footer">
                                    <div className="red-circle"></div>
                                    <img src={Like} alt="like" />
                                </div>
                            </div>
                        </div>

                        <div className="blog-posts">
                            <div className="blog-post">
                                <h2>Discovering Inner Strength</h2>
                                <p>True strength comes from within. Overcoming challenges helps us understand the depths of our potential.</p>
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
                                <h2>Unleashing Creative Energy</h2>
                                <p>Creativity flourishes when we open our minds. Explore new perspectives, and watch your ideas take flight.</p>
                            </div>
                            <div className="blog-post-footer">
                                <p className="author">- Emi Takahashi</p>
                                <div className="right-blog-footer">
                                    <div className="red-circle"></div>
                                    <img src={Like} alt="like" />
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </section>
            <Footer />
        </section>
    )
}

export default BlogUser

