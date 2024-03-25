import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const[books,setBooks] =useState([]);

    useEffect(()=>{
        fetch("Books.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="px-10">
            <div className=" text-center pt-7">
                <h1 className="text-4xl font-bold">Books List {books.length} </h1>
                <p className="pt-5 text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-14 pb-20">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;