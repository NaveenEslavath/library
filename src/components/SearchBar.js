import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value); // Call parent function to update search term
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                value={query} 
                onChange={handleChange} 
                placeholder="Search by title, author, or genre" 
            />
        </div>
    );
};

export default SearchBar;