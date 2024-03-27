import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import ReadBookList from "../Components/ReadBookList/ReadBookList";
import WishListBooks from "../Components/WishListBooks/WishListBooks";
import Rechart from "../Components/Rechart/Rechart";
import BookDetails from "../Components/BookDetails/BookDetails";
import Blog from "../Components/Blog/Blog";
import Review from "../Components/Review/Review";
import { SelectedBookProvider } from "../Components/SelectedBookContext/SelectedBookContext ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        loader: () => fetch('../Books.json'), 
        children: [
          {
            index: true,
            path: "", 
            element: <ReadBookList />,
            loader: () => fetch('../Books.json') 
          },
          {
            path: "wishlist",
            element: <WishListBooks />,
            loader: () => fetch('../Books.json') 
          },
          {
            path: "selectedBookProvider",
            element: <SelectedBookProvider></SelectedBookProvider>,
            loader: () => fetch('../Books.json') 
          },
        ]
      },
      {
        path: "/rechart",
        element: <Rechart />,
        loader: () => fetch('../Books.json') 
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch('../Books.json') 
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/review",
        element: <Review />
      }
    ]
  }
]);
