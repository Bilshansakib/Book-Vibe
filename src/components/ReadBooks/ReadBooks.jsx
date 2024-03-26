import { useLoaderData } from "react-router-dom";

const ReadBooks = () => {
  const book = useLoaderData();
  // const { id, image, tags, bookName, author, category, rating } = book;
  // console.log(book);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.bookName}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <p>{book.author}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;
