

const Review = () => {
    return (
        <div>
            <div className="container mx-auto py-12">
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="bg-gray-200 text-gray-700 py-4 px-6">
                        <h1 className="text-2xl font-bold">Review Book</h1>
                    </div>
                    <div className="p-6">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="rating" className="block font-semibold">Rating:</label>
                                <input
                                    type="number"
                                    id="rating"
                                    name="rating"
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="comment" className="block font-semibold">Comment:</label>
                                <textarea
                                    id="comment"
                                    name="comment"
                                    rows="4"
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button type="submit" className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Submit Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;