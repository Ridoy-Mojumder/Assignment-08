import {  useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { getStoredBookRead } from "../../Utility/localStorage";
import { getStoredWishListBook } from "../../Utility/localStorageForWishList";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);


    
    const[datas,setDatas]=useState(getStoredBookRead);
    const[wishlistData,setWishlistData]=useState(getStoredWishListBook);
    console.log(wishlistData)
    console.log(datas)
    const[pages,setPages] =useState([])

    // useEffect(() => {
    //     let pages = datas.map( d => d.totalPages.substring(3));
    //     setPages(pages)
    //     console.log(pages)
    // }, []);

    const sortAscending = () => {
        const sortAscPages = [...pages]
        sortAscPages.sort((a, b) => a - b)    
        setPages( sortAscPages )
      }

      const sortDescending = () => {
        const sortDescPages = [...pages]
        sortDescPages.sort((a, b) => a - b).reverse()
        setPages( sortDescPages )
    }



    const[order, setOrder] = useState("ASC")
    const handleShirting = (col) =>{
        if( order === "ASC"){
            const shorted = [...datas].short((a,b) => a[col].tolowercase() > b[col].tolowercase() ? 1 : -1)
            const shorted2 = [...wishlistData].short((a,b) => a[col].tolowercase() > b[col].tolowercase() ? 1 : -1)
            setDatas(shorted)
            setWishlistData(shorted2)
            setOrder("DSC")
        }
        if( order === "DSC"){
            const shorted = [...datas].short((a,b) => a[col].tolowercase() < b[col].tolowercase() ? 1 : -1)
            const shorted2 = [...wishlistData].short((a,b) => a[col].tolowercase() < b[col].tolowercase() ? 1 : -1)
            setDatas(shorted)
            setWishlistData(shorted2)
            setOrder("ASC")
        }
    }



    // Example usage of useLoaderData()

    return (
        <div>    
                 


            {/* Dropdown  */}

            <div className="short-selection flex justify-center">
                <form action="#">
                    <label htmlFor="short"></label>
                    <select name="short" id="short" className="bg-green-200 rounded-lg p-3 hover:bg-green-300" onClick={handleShirting}>
                        <option value="#">Shorting <FaAngleDown /></option>
                        <option value="#" disabled></option>
                        <option value="pages" onClick={() => handleShirting('totalPages')} className="bg-green-50  ">Pages</option>
                        <option value="#" disabled></option>
                        <option value="rating" onClick={() => handleShirting('rating')} className="bg-green-50">Rating</option>
                        <option value="#" disabled></option>
                        <option value="pages" onClick={() => handleShirting('yearOfPublishing')} className="bg-green-50">Publishing Year</option>
                    </select>
                </form>
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

            <Outlet  sortingFunction={handleShirting} sortAsc={sortAscending}  sortDsc={sortDescending}/>
        </div>
    );
};

export default ListedBooks;
