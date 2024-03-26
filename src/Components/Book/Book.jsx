import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId,bookName, author, image, totalPages, rating, category, tags } = book;

    return (
        <Link to={`book/${bookId}`}>
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className='flex justify-center items-center'>
                <img src={image} alt={bookName} className="w-60 h-60  mb-4 rounded-md " />
            </div>
            <div>
                {
                    tags.map((tag, index) => (
                        <span key={index} className='inline-block px-3 py-1 text-sm font-semibold text-green-500 mr-2 my-4'>{tag}</span>
                    ))
                }
                
            </div>
            <h1 className="text-xl font-semibold mb-2">{bookName}</h1>
            <h2 className="text-gray-600 text-[16px] font-bold mb-2">Author: {author}</h2>
            <div className="flex justify-between mb-2">
                <span className='flex'>Total Pages: {totalPages}</span>
                <span className="text-gray-500 flex items-center gap-1">Rating: {rating}<CiStar className='text-xl'/></span>

            </div>
            <div className="flex justify-between">
                <span>Category: {category}</span>
            </div>
        </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
};

export default Book;
