import toast from "react-hot-toast";
export const getBooks = () => {
  let books = [];
  const storeBooks = localStorage.getItem("books");
  if (storeBooks) {
    books = JSON.parse(storeBooks);
  }
  return books;
};
// get wishlist

export const getWishLists = () => {
  let wishBooks = [];
  const storedBooks = localStorage.getItem("wishBooks");
  if (storedBooks) {
    wishBooks = JSON.parse(storedBooks);
  }
  return wishBooks;
};

// save wishlist

export const saveWishList = (book) => {
  let wishBooks = getBooks();
  const isExist = wishBooks.find((e) => e.id === book.id);
  if (isExist) {
    return toast.error("Already Listed!");
  }
  wishBooks.push(book);
  localStorage.setItem("wishBooks", JSON.stringify(wishBooks));
  toast.success("Add to Wishlist Successfully");
};

// save read

export const saveBooks = (id) => {
  const storeBooks = getBooks();
  const exists = storeBooks.find((bookId) => bookId === id);
  if (!exists) {
    storeBooks.push(id);
    localStorage.setItem("books", JSON.stringify(storeBooks));
  }
};
// export const saveBooks = (id) => {
//   const storeBooks = getBooks();
//   const exists = storeBooks.find((bookId) => bookId === id);
//   if (!exists) {
//     storeBooks.push(id);
//     localStorage.setItem("books", JSON.stringify(storeBooks));
//   }
//   storeBooks.push(id);
//   localStorage.setItem("books", JSON.stringify(storeBooks));
//   toast.success("Marked as read successfully");
// };

// delete

export const deleteBlog = (id) => {
  let blogs = getBooks();
  const remaining = blogs.filter((b) => b.id !== id);
  localStorage.setItem("books", JSON.stringify(remaining));
  toast.success("Books deleted");
};
