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

  // const [books, setBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storeWishList = getWishLists();
    if (books.length > 0) {
      const wishListStored = books.filter((book) =>
        storeWishList.includes(book.id)
      );
      setWishList(wishListStored);
    }
  }, [books]);
  if (wishList.length < 1)
    return (
      <h1 className="mt-10 text-center font-bold bg-blue-200 py-6">
        No WishList Added
      </h1>
    );
  return (
    <div>
      <p className="mt-10 text-center font-bold bg-slate-200 p-10 rounded-2xl">
        Numbers Of wishlist: {wishList.length}
      </p>
      {/* {wishList[0].author}
      {wishList[1].author}
      {wishList[2].author} */}
    </div>
  );
};

export default WishListBooks;
