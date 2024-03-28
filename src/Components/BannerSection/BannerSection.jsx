import { Link } from "react-router-dom";

const BannerSection = () => {
    return (
        <div className=" ">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-full items-center justify-center pt-14 md:pt-5">
                <div className="text-center md:text-left ">
                    <h1 className="text-5xl md:text-7xl font-bold pb-7">Books to freshen up your bookshelf</h1>
                    <p className="pb-7 text-gray-500">Journey into Literary Wonderland: Explore Endless Stories, All in One Place. Your Next Adventure Awaits—Discover It Here. Dive into Every Tale, Manage Your Literary Journey from Start to Finish</p>
                    <Link to="/listedBooks">
                        <button className='p-4 text-white text-[14px] font-semibold rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 w-36'>
                            View The List
                        </button>
                    </Link>

                </div>
                <div className="flex justify-center">
                    <img src="https://i.ibb.co/hg4Lz5K/mockup-book-with-floating-position-open-cover-456052-392.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
