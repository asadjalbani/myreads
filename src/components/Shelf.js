import { getAll } from "../BooksAPI";
import { useEffect, useState } from "react";
import Book from "./Book";
import propTypes from "prop-types";

const Shelf = ({ title, value }) => {
  const [showAll, setShowAll] = useState([]);

  useEffect(() => {
    let mounted = true;
    const showBooks = async (book) => {
      const res = await getAll();
      if (mounted) setShowAll(res);
    };

    showBooks();
    return () => (mounted = false);
  }, [showAll]);

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {showAll
              .filter((b) => b.shelf === value)
              .map((b) => (
                <li key={b.id}>{<Book {...b} />}</li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  title: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
};

export default Shelf;
