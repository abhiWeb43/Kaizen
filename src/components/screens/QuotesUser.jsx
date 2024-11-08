import React from 'react';
import Nav from './UserNav';
import Footer from './Footer';
import QuotesList from './QuotesList';

const QuotesUser = () => {
  return (
    <section>
      <Nav />
      <section id="quotes-main">
        <div className="quote-list">
          <h1><span>Quo</span>tes</h1>
          <QuotesList />
        </div>
      </section>
      <Footer />
    </section>
  )
}

export default QuotesUser
