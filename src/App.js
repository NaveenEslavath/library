import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import MyLibraryPage from './pages/MyLibraryPage';
import { LibraryProvider } from './context/LibraryContext';
import './styles.css'; // Importing the CSS file

const App = () => {
    return (
        <LibraryProvider>
            <Router>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/book/:id" element={<BookDetailsPage />} />
                        <Route path="/my-library" element={<MyLibraryPage />} />
                    </Routes>
                </div>
            </Router>
        </LibraryProvider>
    );
};

export default App;