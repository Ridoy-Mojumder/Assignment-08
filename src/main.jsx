import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import BookDetails from './Components/BookDetails/BookDetails';
import ReadBookList from './Components/ReadBookList/ReadBookList';
import Rechart from './Components/Rechart/Rechart';
import WishListBooks from './Components/WishListBooks/WishListBooks';
import Blog from './Components/Blog/Blog';
import Review from './Components/Review/Review';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBookList></ReadBookList>,
            loader: () => fetch('/Books.json')
          },
          {
            path: "wishlist",
            element: <WishListBooks></WishListBooks>,
            loader: () => fetch('/WishlistBooks.json')
          }
        ]
      },
      {
        path: "/rechart", 
        element: <Rechart></Rechart> ,
        loader: () => fetch('/Books.json')
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/Books.json')
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/review",
        element: <Review></Review>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
