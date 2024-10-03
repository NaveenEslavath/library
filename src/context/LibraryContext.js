import React, { createContext, useState } from 'react';
import data from '../data'; // Assuming you have this JSON data

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
    const [books] = useState(data.books); // Initial book data
    const [myLibrary, setMyLibrary] = useState([]); // User's personal library

    // Function to add a book to My Library
    const addToLibrary = (book) => {
        // Check if the book is already in the library
        if (!myLibrary.find(b => b.id === book.id)) {
            setMyLibrary((prev) => [...prev, book]); // Add book if not already present
        } else {
            alert("This book is already in your library."); // Optional: Alert user if already added
        }
    };

    // Function to remove a book from My Library
    const removeFromLibrary = (id) => {
        setMyLibrary((prev) => prev.filter(book => book.id !== id)); // Remove book by id
    };

    return (
        <LibraryContext.Provider value={{ books, myLibrary, addToLibrary, removeFromLibrary }}>
            {children}
        </LibraryContext.Provider>
    );
};