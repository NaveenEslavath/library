import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
    const navigate = useNavigate();

    return (
        <div className="book-card" onClick={() => navigate(`/book/${book.id}`)}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>Rating: {book.rating}</p>
        </div>
    );
};

export default BookCard;