import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LibraryContext } from '../context/LibraryContext';

const BookDetailsPage = () => {
    const { id } = useParams();
    const { books, addToLibrary } = useContext(LibraryContext);
    
    // Find the selected book by ID
    const book = books.find(b => b.id === parseInt(id));

    if (!book) return <h2>Book not found!</h2>;

    return (
        <div className="book-details">
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Rating: {book.rating}</p>
            <p>Description: {book.description}</p>
            <p>Publication Year: {book.publication_year}</p>
            <button onClick={() => addToLibrary(book)}>Add to My Library</button> {/* Button to add book */}
        </div>
    );
};

export default BookDetailsPage;