import React, { useContext } from "react";
import { BookContext } from "../Context/context";
import books from "../../assets/img/book.jpeg";
import Product from "../Product";
import ProductCard from "../ProductCard";
import det from "./../../assets/img/dedective.svg";
import fan from "./../../assets/img/fantastice.svg";
import adv from "./../../assets/img/priclushhenie.svg";
import sci from "./../../assets/img/naucnay.svg";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
const Home = () => {
  const { Password, setPassword } = useContext(BookContext);
  return (
    <>
      <div>
        <div className="container">
          <div className=" flex justify-center ">
            <img
              style={{
                display: Password ? "none" : "flex",
              }}
              className=" h-[300px] w-[99.7%] rounded-[10px] "
              src={books}
              alt="img"
            />
          </div>
          <h1 className="text-blue-700 text-[50px] font-[700] mb-[20px]">
            Category
          </h1>
          <div
            style={{
              display: Password ? "none" : "flex",
            }}
            className=" flex justify-between items-center"
          >
            <div className="relative ">
              <img src={det} alt="img" />
              <h1 className="text-2xl absolute bottom-[60px] text-white ">
                Detective
              </h1>
              <Link to={"/detective"}>
                <GoArrowRight className="text-3xl absolute bottom-[60px] text-white right-[140px] cursor-pointer" />
              </Link>
            </div>
            <div className="relative">
              <img src={fan} alt="img" />
              <h1 className="text-2xl absolute bottom-[60px] text-white ">
                Fantasy
              </h1>
              <Link to={"/fantasy"}>
                <GoArrowRight className="text-3xl absolute bottom-[60px] text-white right-[150px] cursor-pointer " />
              </Link>
            </div>
            <div className="relative">
              <img src={adv} alt="img" />
              <h1 className="text-2xl absolute bottom-[60px] text-white ">
                Adventures
              </h1>
              <Link to={"/adventures"}>
                <GoArrowRight className="text-3xl absolute bottom-[60px] text-white right-[130px] cursor-pointer " />
              </Link>
            </div>
            <div className="relative">
              <img src={sci} alt="img" />
              <h1 className="text-2xl absolute bottom-[60px] text-white ">
                Scientific
              </h1>
              <Link to={"/scientific"}>
                <GoArrowRight className="text-3xl absolute bottom-[60px] text-white right-[140px] cursor-pointer  " />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Product />
    </>
  );
};

export default Home;
