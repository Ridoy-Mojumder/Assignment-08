import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookRead } from "../../Utility/localStorage";
import ReadBook from "../ReadBook/ReadBook";
import WishListBooks from "../WishListBooks/WishListBooks";

const ReadBookList = () => {
    const [readBooks, setReadBooks] = useState([]);
    const books = useLoaderData();


    useEffect(() => {
        const storedBooksId = getStoredBookRead();


        if (books && books.length > 0) {
            const filteredBooks = books.filter(book => storedBooksId.includes(book.bookId));

            setReadBooks(filteredBooks);
        }
    }, [books]);

    return (
        <div>
            <h1  className="text-2xl text-center p-12">This is read book list {readBooks.length}</h1>

            <div className="grid grid-cols-1 gap-7">
                {readBooks.map(readBook => <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>)}
            </div>
            <WishListBooks></WishListBooks>



        </div>
    );
};

export default ReadBookList;
