import React, { useContext, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { BookContext } from '../Context/context';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

const ProductCard = ({ val }) => {
  console.log(val.id, 'ID');
  const { books, setBooks, Password, basket, setBasket } = useContext(BookContext);
  const [mouse, setMouse] = useState(false);
  const nav = useNavigate();
  const DeleteProduct = () => {
    let deletePro = books.filter((fil) => fil.id !== val.id);
    setBooks(deletePro);
    localStorage.setItem('books', JSON.stringify(deletePro));
  };
  const basketSome = basket.some((el) => el.id === val.id);
  const AddTo_Basket = () => {
    if (basketSome) {
      let deletBasket = basket.filter((el) => el.id !== val.id);
      setBasket(deletBasket);
      localStorage.setItem('basket', JSON.stringify(deletBasket));
    } else {
      nav('/basket');
      let results = [...basket, val];
      setBasket(results);
      localStorage.setItem('basket', JSON.stringify(results));
    }
  };
  return (
    <div
      key={val.id}
      style={{
        display: Password ? 'none' : 'block',
      }}
      className="productCard w-[340px] h-[625px] border-solid border-blue-700 border-[2px] rounded-[5px] relative "
    >
      <a
        onClick={() => DeleteProduct()}
        className="text-blue-700 text-2xl cursor-pointer absolute right-[1px] top-[1px]"
      >
        <AiFillCloseCircle />
      </a>
      <Zoom>
        <img
          className="w-full h-[100%] border-bottom-[2px] border-blue-700 "
          src={val.url}
          alt="img"
        />
      </Zoom>
      <div className="text-[30px] flex justify-between  m-[17px]">
        <h1>{`${val.price}$`}</h1>
        <p
          onClick={() => {
            AddTo_Basket();
          }}
        >
          {basketSome ? (
            <p className="text-blue-700 cursor-pointer">
              <FaCartShopping />
            </p>
          ) : (
            <FaCartShopping className="cursor-pointer" />
          )}
        </p>
      </div>
      <Link to={`/detailsProduct/${val.id}`}>
        <div className="flex">
          <p
            style={{
              color: mouse ? '#1d4ed8' : 'black',
              borderBottom: mouse ? '2px solid #1d4ed8' : '',
              fontWeight: '700',
            }}
            onMouseOver={() => setMouse(true)}
            onMouseOut={() => setMouse(false)}
            className="text-xs ml-[17px]"
          >
            {val.name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
