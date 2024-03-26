// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { getBooks } from "../Utility";
// import WishListCard from "../WishListCard/WishListCard";
// const WishListBooks = () => {
//   // const [bookCards, setBookCards] = useState([]);
//   // const books = useLoaderData();
//   // useEffect(() => {
//   //   const storedBooks = getBooks();
//   //   if (books.length > 0) {
//   //     const bookStored = books.filter((book) => storedBooks.includes(book.id));
//   //     // console.log(bookStored);
//   //     setBookCards(bookStored);
//   //   }

import { useEffect, useState } from "react";
import { getWishLists } from "../Utility";
import WishListCard from "../WishListCard/WishListCard";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

//   //   // setBooks(storedBooks);
//   }, []);

//   return (
//     // <div>
//     //   {bookCards.map((book) => (
//     //     <WishListCard key={book.id} book={book}></WishListCard>
//     //     // <Book key={book.id} book={book}></Book>
//     //     // <ReadCard key={book.id} book={book}></ReadCard>
//     //   ))}
//     // </div>
//   );
// };

// export default WishListBooks;
const WishListBooks = () => {
  const books = useLoaderData();
  // const [wishList, setWishList] = useState([]);
  // useEffect(() => {
  //   const storeWishList = getBooks();
  //   setWishList(storeWishList);
  // }, []);
  // const { id, image, tags, bookName, author, category, rating } = book;
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const storeWishList = getWishLists();
    if (books.length > 0) {
      const wishListStored = books.filter((book) =>
        storeWishList.includes(book.id)
      );
      setWishList(wishListStored);
    }
  }, []);

  return (
    <div>
      <p>what teh</p>
      {wishList.map((book) => {
        <Book key={book.id} book={book}></Book>;
      })}
    </div>
  );
};

export default WishListBooks;
