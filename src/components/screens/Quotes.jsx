import React from 'react';
import Nav from './Nav';
import QuotesData from '../assets/Quotes.json';
import MusashiBg from '../assets/images/musashi-bg.png';

const Quotes = () => {
  return (
    <section>
      <Nav />
      <section id="quotes-main">
        <div className="quote-list">
          <h1>Quotes</h1>

          <ul className="quote-align">
            {QuotesData.map((quote, index) => (
              <li 
                key={quote.id} 
                className={`quote-item ${index % 2 === 0? 'quote-item-left' : 'quote-item-right'}`}
              >
                <svg width="400px" height="50" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="repeating-rect" width="80" height="50" patternUnits="userSpaceOnUse">
                      <rect x="0" y="1" width="80" height="4" fill="#555" />
                      <rect x="20" y="0" width="30" height="6" fill="#ff0000" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="40" fill="url(#repeating-rect)" />
                </svg>

                <div className="quote-container">
                  <img width={"300px"} src={MusashiBg} alt="author" />
                  <blockquote>
                    <footer className="quote-author">
                      <cite>- {quote.author}</cite>
                    </footer>
                    <p className="quote-text">"{quote.quote}"</p>
                  </blockquote>
                </div>

                <div className="hr-quote">
                  <svg width="400px" height="50" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="repeating-rect" width="80" height="50" patternUnits="userSpaceOnUse">
                        <rect x="0" y="1" width="80" height="4" fill="#555" />
                        <rect x="20" y="0" width="30" height="6" fill="#ff0000" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="40" fill="url(#repeating-rect)" />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}

export default Quotes;
