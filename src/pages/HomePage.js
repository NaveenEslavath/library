import React, { useState, useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
    const { books } = useContext(LibraryContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (query) => {
        setSearchTerm(query);
    };

    // Filter books based on search term
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Virtual Book Library</h1>
            <SearchBar onSearch={handleSearch} />
            <BookList books={filteredBooks} /> {/* Pass filtered books to BookList */}
        </div>
    );
};

export default HomePage;