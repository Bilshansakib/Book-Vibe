import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ListedBooks from "./pages/ListedBooks";
import PagesToRead from "./pages/PagesToRead";
import BookDetails from "./components/BookDetails/BookDetails";
import ReadBooks from "./components/ReadBooks/ReadBooks";
import WishListBooks from "./components/WishListBooks/WishListBooks";
import { Toaster } from "react-hot-toast";
import BookGalley from "./components/BookGallery/BookGalley";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,

            element: <ReadBooks></ReadBooks>,
            loader: () => fetch("/Books.json"),
          },
          {
            path: "wishlist",
            element: <WishListBooks></WishListBooks>,
            loader: () => fetch("/Books.json"),
          },
        ],
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/gallery",
        element: <BookGalley></BookGalley>,
        loader: () => fetch("/public/Books.json"),
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("Books.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>
);
