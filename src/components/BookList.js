import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
    return (
        <div className="book-list">
            {books.length === 0 ? (
                <p>No books found.</p> // Message when no books match the search
            ) : (
                books.map(book => (
                    <BookCard key={book.id} book={book} />
                ))
            )}
        </div>
    );
};

export default BookList;