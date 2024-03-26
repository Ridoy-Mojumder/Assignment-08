import { Outlet } from "react-router-dom";
import ListedBooks from "../ListedBooks/ListedBooks";


const MarkedBook = () => {
    return (
        <div>
            <ListedBooks></ListedBooks>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MarkedBook;