import { getAll, update } from "../BooksAPI";

const Book = (books) => {
  const handler = async (e) => {
    await update({ id: books.id }, e.target.value);
    await getAll();
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${books.imageLinks?.thumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select defaultValue={books.shelf} onChange={handler}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">Title: {books.title}</div>
      <div className="book-authors">By {books?.authors}</div>
    </div>
  );
};

export default Book;
