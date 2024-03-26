import toast from "react-hot-toast";
export const getBooks = () => {
  let books = [];
  const storeBooks = localStorage.getItem("books");
  if (storeBooks) {
    books = JSON.parse(storeBooks);
  }
  return books;
};

// save

// export const saveBooks = (book) => {
//   let books = getBooks();
//   const isExist = books.find((e) => e.id === book.id);
//   if (isExist) {
//     return toast.error("Already Read!");
//   }
//   books.push(book);
//   localStorage.setItem("books", JSON.stringify(books));
//   toast.success("Book read Successfully");
// };

export const saveBooks = (id) => {
  const storeBooks = getBooks();
  const exists = storeBooks.find((bookId) => bookId === id);
  if (!exists) {
    storeBooks.push(id);
    localStorage.setItem("books", JSON.stringify(storeBooks));
  }
};

// delete
export const deleteBlog = (id) => {
  let blogs = getBooks();
  const remaining = blogs.filter((b) => b.id !== id);
  localStorage.setItem("books", JSON.stringify(remaining));
  toast.success("Books deleted");
};
