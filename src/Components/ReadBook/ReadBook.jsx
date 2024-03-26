import PropTypes from 'prop-types';
import { FaBook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
const ReadBook = ({ readBook }) => {
    const { bookId, bookName, image, totalPages, rating, category, tags, yearOfPublishing, publisher } = readBook;

    return (
        <div className="bg-white grid grid-cols-1 gap-10 md:grid-cols-5 rounded-lg shadow-md p-6">
            <div className='flex justify-center col-span-2 items-center'>
                <img src={image} alt={bookName} className="w-full h-auto  mb-4 rounded-md" />
            </div>
            <div className='col-span-3'>
                <h1 className="text-xl font-semibold mb-2">{bookName}</h1>
                <div className='flex items-center gap-1 '>
                    <div className='pr-10'>
                        <h1><span className='font-bold'>Tags:</span>
                            <span>
                                {
                                    tags.map((tag, index) => (
                                        <span key={index} className='inline-block px-3 py-1 text-sm font-semibold text-green-500 mr-2 my-4'>{tag}</span>
                                    ))
                                }
                            </span>
                        </h1>
                    </div>
                    <div className='pl-6'>
                        <h1><span className='font-bold'>Your Publishing Year:</span> {yearOfPublishing}</h1>
                    </div>

                </div>
                <h2 className="text-gray-600 text-[16px] font-bold mb-2 flex items-center gap-1 pt-2"><FaRegUser className='text-xl gap-2 text-black font-bold' /><span className='pl-2'>Publisher: {publisher}</span></h2>
                <div className="flex justify-between mb-2 pb-4">
                    <span className='flex items-center gap-1 pt-2'><span><FaBook /> </span > <span className='pl-2'>Total Pages: {totalPages}</span></span>
                </div>
                <hr />
                <div className='grid grid-cols-2 pt-4'>
                    <span className="items-center gap-1 bg-blue-50 rounded-full w-2/3 text-center flex justify-center  py-2 font-bold text-gray-700">Rating: {rating}</span>
                    <span className='items-center gap-1 bg-purple-50 rounded-full w-2/3 text-center flex justify-center  py-2 font-bold text-gray-700'>Category: {category}</span>
                </div>

                <div className='pt-6'>
                    <button className='p-4  text-white text-[14px] font-semibold rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 w-28'>
                    <Link to={`/book/${bookId}`}>View Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
ReadBook.propTypes = {
    readBook: PropTypes.object.isRequired,
    book: PropTypes.object.isRequired,
};
export default ReadBook;
