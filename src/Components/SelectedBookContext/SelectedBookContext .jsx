import { createContext, useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PropTypes from 'prop-types';

const SelectedBookContext = createContext();



export const useSelectedBookContext = () => useContext(SelectedBookContext);

export const SelectedBookProvider = ({ children }) => {


    const [readBooks, setReadBooks] = useState([]);
    const [wishListBooks, setWishListBooks] = useState([]);
    const handleSelectedBook = (filter, bookType) => {
        let booksToSort = [];
        if (bookType === 'read') {
            booksToSort = readBooks;
        } else if (bookType === 'wishlist') {
            booksToSort = wishListBooks;
        }

        if (filter === 'totalPages') {
            // Sort by total pages
            const sortedBooks = [...booksToSort].sort((a, b) => a.totalPages - b.totalPages);
            if (bookType === 'read') {
                setReadBooks(sortedBooks);
            } else if (bookType === 'wishlist') {
                setWishListBooks(sortedBooks);
            }
        } else if (filter === 'rating') {
            // Sort by rating
            const sortedBooks = [...booksToSort].sort((a, b) => b.rating - a.rating);
            if (bookType === 'read') {
                setReadBooks(sortedBooks);
            } else if (bookType === 'wishlist') {
                setWishListBooks(sortedBooks);
            }
        } else if (filter === 'yearOfPublishing') {
            // Sort by year of publishing
            const sortedBooks = [...booksToSort].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            if (bookType === 'read') {
                setReadBooks(sortedBooks);
            } else if (bookType === 'wishlist') {
                setWishListBooks(sortedBooks);
            }
        }
    };
    
    const booksData = useLoaderData();
    console.log(booksData)

    return (
        <SelectedBookContext.Provider value={handleSelectedBook}>
            {children}
        </SelectedBookContext.Provider>
    );
};
SelectedBookProvider.propTypes = {
    children: PropTypes.object.isRequired,
};
