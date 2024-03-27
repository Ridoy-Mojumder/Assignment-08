import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookRead } from "../../Utility/localStorage";
import ReadBook from "../ReadBook/ReadBook";
// import { SelectedBookProvider } from "../SelectedBookContext/SelectedBookContext ";
// import WishListBooks from "../WishListBooks/WishListBooks";

const ReadBookList = () => {
    const [readBooks, setReadBooks] = useState([]);
    const books = useLoaderData();
    // const [booked,setBooked] = useState([]);
    // const [displayBooked,setDisplayBooked] = useState([]);

    // const handleSelectedBook = filter =>{
    //     if(filter === 'totalPages'){
    //         setDisplayBooked(booked)
    //     } else if(filter === 'rating'){
    //         const remoteJobs = booked.filter(book => book.remote_or_onsite === 'Remote')
    //         setDisplayBooked(remoteJobs)
    //     } else if(filter === 'yearOfPublishing'){
    //         const onsiteJobs = booked.filter(job => job.remote_or_onsite === 'Onsite')
    //         setDisplayBooked(onsiteJobs)
    //     }
    // }


    useEffect(() => {
        const storedBooksId = getStoredBookRead();


        if (books && books.length > 0) {
            const filteredBooks = books.filter(book => storedBooksId.includes(book.bookId));

            setReadBooks(filteredBooks);
        }
    }, [books]);

    return (
        <div>
            <h1  className="text-2xl text-center p-12">This is read book list </h1>

            <div className="grid grid-cols-1 gap-7">
                {readBooks.map(readBook => <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>)}
            </div>
            {/* <WishListBooks></WishListBooks> */}
            {/* <SelectedBookProvider></SelectedBookProvider> */}



        </div>
    );
};

export default ReadBookList;
