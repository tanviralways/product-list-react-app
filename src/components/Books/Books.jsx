import React, { useState } from "react";
import Book from "../book/Book";

function Books() {
  // main array of objects state || books state || books array of objects
  const [books, setBooks] = useState([]);
  // input field states

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pbYear, setpbYear] = useState("");

  const clearData = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
    setpbYear("");
  };

  // form submit event

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {
      title,
      author,
      isbn,
      pbYear,
    };
    setBooks([...books, book]);
    clearData("");
  };
  //creating a book object

  // delete book from LS
  const deleteBook = (isbn) => {
    const rest = books.filter((book) => {
      return book.isbn !== isbn;
    });
    setBooks(rest);
  };

  // saving data to local storage
  return (
    <div>
      <div className="wrapper">
        <h1 className="text-info">BookList App</h1>
        <p className="text-warning">
          Add and view your books using local storage
        </p>
        <div className="main d-sm-flex flex-sm-row gap-10  ">
          <div className="form-container mb-5">
            <form onSubmit={handleSubmit}>
              <label>Title</label>
              {/* <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
                type="text"
                className="form-control"
                required></input> */}
              <select name="colors" id="colors">
                <option value="red"></option>
                <option value="blue"></option>
                <option value="black"></option>
              </select>
              <br></br>
              <label>Author</label>
              <input
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                type="text"
                className="form-control"
                required></input>
              <br></br>
              <label>ISBN#</label>
              <input
                onChange={(e) => setIsbn(e.target.value)}
                value={isbn}
                type="text"
                className="form-control"
                required></input>
              <br></br>
              <label>Published Year</label>
              <input
                onChange={(e) => setpbYear(e.target.value)}
                value={pbYear}
                type="text"
                className="form-control"
                required></input>
              <br></br>
              <button
                type="submit"
                className="mb-5 btn btn-outline-success btn-md">
                ADD
              </button>
            </form>
          </div>

          {books.length ? (
            <div className="view-container border  border-info">
              <>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ISBN#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Published Year</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {books.map((book) => (
                        <Book
                          key={book.isbn}
                          book={book}
                          deleteBook={deleteBook}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  className="btn btn-outline-danger btn-md"
                  onClick={() => setBooks([])}>
                  Remove All
                </button>
              </>
            </div>
          ) : (
            <h1 className="text-primary border border-info">
              No content available
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Books;
