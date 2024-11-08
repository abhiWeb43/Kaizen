// React Authors Slick with Text Content for Index Page
import React from 'react';
import AuthorsSlick from './Authors_Slick';

const QuotesAuthor = () => {
    return (
        <section className="author-container">
            <AuthorsSlick />
            <div className="author-text">
                <h1>Famous <span>Quotes</span></h1>
                <p>"Do not fear death, but rather the unlived life."</p>
            </div>
        </section>
    )
}

export default QuotesAuthor
