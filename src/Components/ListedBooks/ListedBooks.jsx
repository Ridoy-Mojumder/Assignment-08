import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);



    // Example usage of useLoaderData()

    return (
        <div>
            {/* Dropdown for selecting book type */}
            <div className="flex justify-center">
                <details className="dropdown ">
                    <summary className="m-1 btn bg-green-400 border-green-950 hover:bg-green-200 hover:text-gray-800 flex gap-1 ">Short <FaAngleDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-green-100 rounded-box w-52">
                        <li className="bg-green-50 rounded-lg py-1 my-2"><a>Pages</a></li>
                        <li className="bg-green-50 rounded-lg py-1 my-2"><a>Rating</a></li>
                        <li className="bg-green-50 rounded-lg py-1 my-2"><a>Published Year</a></li>
                    </ul>
                </details>
            </div>

            {/* Tabs */}
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link to='' onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read</span>
                </Link>
                <Link to={`wishlist`} onClick={() => setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist</span>
                </Link>
            </div>

            <Outlet />
        </div>
    );
};

export default ListedBooks;
