import React, { useContext } from "react";
import { BookContext } from "../Context/context";
import ProductCard from "../ProductCard";
import noProduct from "../../assets/img/no-product.png";
const Product = () => {
  const { books, setBooks, Password } = useContext(BookContext);
  function sortProduct(e) {
    let sort = e.target.value;
    const ProductSort = books.slice().sort((a, b) => {
      if (sort === "cheap") {
        return a.price - b.price;
      } else if (sort === "expensive") {
        return b.price - a.price;
      } else if (sort === "A-Z") {
        return a.name.localeCompare(b.name);
      } else if (sort === "Z-A") {
        return b.name.localeCompare(a.name);
      }
    });
    setBooks(ProductSort);
  }

  return (
    <div
      style={{
        display: Password ? "none" : "flex",
      }}
      className="my-[50px]"
    >
      <div className="container">
        <div className=" mb-[5px]">
          <select
            className="w-[130px] border-2 p-[6px] text-blue-700 border-blue-700 outline-none rounded-[3px]  "
            onChange={sortProduct}
          >
            <option value="cheap">Cheap</option>
            <option value="expensive">Expensive</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
        <div className=" flex items-center gap-[50px] flex-wrap mt-[50px]  ">
          {books.length ? (
            books.map((el) => <ProductCard val={el} key={el.id} />)
          ) : (
            <img className="m-auto" src={noProduct} alt="img" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
