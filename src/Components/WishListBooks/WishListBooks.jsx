import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishListBook } from "../../Utility/localStorageForWishList";
import WishListBook from "../WishListBook/WishListBook";



const WishListBooks = () => {
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const books = useLoaderData();
    //console.log(books)
    
    useEffect(() => {
        const storedBooksId = getStoredWishListBook();
        console.log("Stored wishlist Book IDs:", storedBooksId);
        
        if (books && books.length > 0) {
            const filteredBooks = books.filter(book => storedBooksId.includes(book.bookId));
            console.log("Filtered wishlist Books:", filteredBooks);
            setWishlistBooks(filteredBooks);
        }
    }, [books]);
    
    return (
        <div>
            <h1 className="text-2xl text-center p-12">This is wishlist book {wishlistBooks.length}</h1>
            <div>
                {wishlistBooks.map(wishlistBook => (
                    <WishListBook wishlistBook={wishlistBook} key={wishlistBook.bookId}></WishListBook>
                ))}
            </div>
        </div>
    );
};

export default WishListBooks;
