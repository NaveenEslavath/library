import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';

const MyLibraryPage = () => {
    const { myLibrary, removeFromLibrary } = useContext(LibraryContext);

    return (
        <div className="my-library">
            <h1>My Library</h1>
            {myLibrary.length === 0 ? (
                <p>No books in your library.</p> // Message when no books are in the library
            ) : (
                myLibrary.map(book => (
                    <div key={book.id} className="library-book">
                        <h3>{book.title}</h3>
                        <button onClick={() => removeFromLibrary(book.id)}>Remove</button> {/* Button to remove book */}
                    </div>
                ))
            )}
        </div>
    );
};

export default MyLibraryPage;