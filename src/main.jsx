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
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead></PagesToRead>,
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
  </React.StrictMode>
);
