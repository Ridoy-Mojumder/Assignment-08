import PropTypes from 'prop-types';

const Book = ({ book }) => {
    const {  bookName, author, image, review, totalPages, rating, category,tags } = book;

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <img src={image} alt={bookName} className="w-60 h-auto  mb-4 rounded-md" />
            <h1 className="text-xl font-semibold mb-2">{bookName}</h1>
            <h2 className="text-gray-600 mb-2">Author: {author}</h2>
            <p className="text-gray-700 mb-4">{review}</p>
            <div className="flex justify-between mb-2">
                <span>Total Pages: {totalPages}</span>
                <span>Rating: {rating}</span>
                <span>{tags}</span>
            </div>
            <div className="flex justify-between">
                <span>Category: {category}</span>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
};

export default Book;
