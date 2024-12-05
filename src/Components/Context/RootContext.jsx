import React, { useEffect, useState } from "react";
import { BookContext } from "./context";

const RootContext = ({ children }) => {
  const [Password, setPassword] = useState(false);
  const [basket, setBasket] = useState([]);
  const [books, setBooks] = useState([]);
  const getBasket = () => {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(res);
  };
  const getBooks = () => {
    let local = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(local);
  };
  useEffect(() => {
    getBooks();
    getBasket();
  }, []);
  return (
    <BookContext.Provider
      value={{
        Password,
        setPassword,
        books,
        setBooks,
        basket,
        setBasket,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default RootContext;
