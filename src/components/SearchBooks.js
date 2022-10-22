import { getAll, search } from "../BooksAPI";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Book from "./Book";

const SearchBooks = () => {
  const [getAllData, setGetAllData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchBooks, setSearchBooks] = useState("");

  useEffect(() => {
    let mounted = true;

    if (searchBooks) {
      const searchFunc = async () => {
        const res = await search(searchBooks);
        if (res.error) return setSearchData([]);
        if (mounted) setSearchData(res);
      };

      const getFunc = async () => {
        const resp = await getAll();
        setGetAllData(resp);
      };

      searchFunc();
      getFunc();
    }

    return () => {
      mounted = false;
      setSearchData([]);
    };
  }, [searchBooks]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchBooks}
            onChange={(e) => {
              setSearchBooks(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchData.length < 0 && <h3>No Book Found</h3>}
          {searchData.length > 0 &&
            searchData
              .filter((data) => data.authors)
              .filter((data) =>
                data.imageLinks ? data.imageLinks.thumbnail : false
              )
              .map((data) => {
                const shelf = getAllData.find((get) => get.id === data.id);
                if (shelf) {
                  data.shelf = shelf.shelf;
                } else {
                  data.shelf = "none";
                }
                return (
                  <li key={data.id}>
                    <Book {...data} />
                  </li>
                );
              })}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
