import { useLoaderData, useParams } from "react-router-dom";
// import PropTypes from 'prop-types';
import { getStoredBookRead, saveReadBooks } from "../../Utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { getStoredWishListBook, saveWishListBook } from "../../Utility/localStorageForWishList";

const BookDetails = () => {
    const [isReadClicked, setIsReadClicked] = useState(false);
  const [isWishlistClicked, setIsWishlistClicked] = useState(false);
  console.log(isReadClicked,isWishlistClicked)

  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === idInt);

  if (!book) {
    return <div className="text-center pt-7">Book not found</div>;
  }

  const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing, } = book;

  const handleReadBooks = () => {
    const storedBooksId = getStoredBookRead();
    if (storedBooksId.includes(idInt)) {
      toast("You have already read this book.");
    } else {
      setIsReadClicked(true);
      saveReadBooks(idInt);
      toast("Read Successfully!");
    }
  };

  const handleWishlist = () => {
    const storedReadBooksId = getStoredBookRead();
    if (storedReadBooksId.includes(idInt)) {
      toast("Error: You have already read this book.");
    } else {
      const storedBooksId = getStoredWishListBook();
      if (storedBooksId.includes(idInt)) {
        toast("Error: You have already added this book to your wishlist.");
      } else {
        setIsWishlistClicked(true);
        saveWishListBook(idInt);
        toast("You have added this book to your wishlist.");
      }
    }
  };
  

    return (
        <>
            <div className="text-center py-10">
                <h1 className="text-4xl font-bold">Books Details</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md p-6">
                <div className='justify-center items-center'>
                    <img src={image} alt={bookName} className="w-full h-full mb-4 rounded-md" />
                </div>
                <div>
                    <h1 className="text-xl font-semibold mb-2">{bookName}</h1>
                    <h2 className="text-gray-600 mb-2">Author: {author}</h2>
                    <hr />
                    <div className="flex justify-between py-4">
                        <span>{category}</span>
                    </div>
                    <hr />
                    <p className="text-gray-700 mb-4"><span className="text-black font-bold">Review: </span>{review}</p>
                    <hr />
                    <div className="py-4">
                        Tags:
                        {tags.map((tag, index) => (
                            <span key={index} className="inline-block px-3 py-1 text-sm font-semibold text-green-500 mr-2 my-4"> {tag}</span>
                        ))}
                    </div>
                    <hr />
                    <div className="grid grid-cols-6 gap-2 pt-4 pr-16">
                        <div className=" grid grid-cols-1 col-span-2 gap-4">
                        <p>Number of Pages </p>
                        <p>Publisher </p>
                        <p>Year of Publisher </p>
                        <p>Rating </p>
                        </div>
                        <div className=" grid grid-cols-1 col-span-1 gap-4">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        </div>
                        <div className=" grid grid-cols-1 col-span-3 gap-4">
                        <p className="font-bold">{totalPages}</p>
                        <p className="font-bold">{publisher}</p>
                        <p className="font-bold">{yearOfPublishing}</p>
                        <p className="font-bold">{rating}</p>
                        </div>
                    </div>
                    <div className="flex gap-8 mb-2 pt-8">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300" onClick={handleReadBooks}>Read</button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300" onClick={handleWishlist}>Wishlist</button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default BookDetails;
