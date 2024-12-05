import React, { useContext } from "react";
import BasketCard from "./BasketCard";
import { BookContext } from "../Context/context";
import not from "../../assets/img/no-product-found.png";
const Basket = () => {
  const { basket, setBasket } = useContext(BookContext);
  return (
    <div>
      <div className="container">
        <div className=" mt-[50px] flex  flex-col gap-[30px]">
          {basket?.length ? (
            basket?.map((ell) => <BasketCard ell={ell} key={ell.id} />)
          ) : (
            <center>
              <img src={not} alt="img" />
            </center>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
