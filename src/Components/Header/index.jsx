import React, { useContext, useState } from 'react';
import { PiUserLight } from 'react-icons/pi';
import { PiClockCounterClockwiseBold } from 'react-icons/pi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { GoSearch } from 'react-icons/go';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { BookContext } from '../Context/context';
import { VscClose } from 'react-icons/vsc';
import { IoEyeSharp } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
const Header = () => {
  const { Password, setPassword } = useContext(BookContext);
  const [password, setpasSword] = useState('');
  const [Icon, setIcon] = useState(false);
  const navigate = useNavigate();
  const [State, setState] = useState(true);
  const ErrorToast = () => {
    toast.error(' 🤷‍♂️ The password is not correct!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };
  const exitToAdmin = () => {
    if (password.trim() === '2404') {
      navigate('/admin');
      setpasSword('');
      setPassword(false);
      setState(false);
    } else {
      ErrorToast();
      setpasSword('');
    }
  };

  function task() {
    navigate('/');
    setState(true);
  }
  return (
    <>
      <div
        style={{
          display: Password ? 'none' : 'flex',
        }}
        className="w-full  bg-blue-600 h-[100px] rounded-xl flex items-center"
      >
        <div className=" container  ">
          <div className=" flex justify-between items-center">
            <div className=" flex  text-white justify-between items-center gap-[100px] ">
              <div className=" text-white flex items-center gap-[30px]">
                <h1
                  style={{
                    display: State ? 'flex' : 'none',
                  }}
                  onClick={() => setPassword(true)}
                  className=" flex flex-col justify-center items-center gap-[1px] ml-2"
                >
                  <PiUserLight className="text-[30px] cursor-pointer " />
                  <h6 className=" cursor-pointer">Admin</h6>
                </h1>

                <Link to={'/history'}>
                  <h1
                    onClick={() => setState(true)}
                    className="flex flex-col justify-center items-center cursor-pointer"
                  >
                    <PiClockCounterClockwiseBold className="text-[30px] cursor-pointer" />
                    History
                  </h1>
                </Link>
                <Link to={'/basket'}>
                  <p
                    onClick={() => setState(true)}
                    className="flex flex-col justify-center items-center cursor-pointer"
                  >
                    <HiOutlineShoppingCart className="text-[30px] cursor-pointer" />
                    Basket
                  </p>
                </Link>
              </div>
              <div className=" relative flex  items-center ">
                <input
                  className="text-[15px] placeholder:text-xs
                 text-black font-sans  rounded-[5px] outline-none w-[250px] h-[40px] p-3  "
                  type="text"
                  placeholder="Search product"
                />
                <h6 className="text-slate-500  absolute top-[10px] right-2 text-xl cursor-pointer">
                  <GoSearch />
                </h6>
              </div>
            </div>

            <h1
              onClick={() => task()}
              className="text-green-200 mr-[20px] cursor-pointer font-black text-2xl "
            >
              bookSTORE
            </h1>
          </div>
        </div>
      </div>
      <div
        style={{
          display: Password ? 'flex' : 'none',
        }}
        className="  w-[100%] h-[100%] bg-[white] absolute  justify-center items-center z-[100] "
      >
        <div
          className=" bg-black flex items-center flex-col justify-center rounded-[14px] gap-[60px] relative w-[880px]
          h-[460px]
        bottom-[5%]
          "
        >
          <h6
            onClick={() => setPassword(false)}
            className="cursor-pointer absolute right-1 text-blue-600 text-4xl top-0"
          >
            <VscClose />
          </h6>
          <input
            value={password}
            onChange={(e) => setpasSword(e.target.value)}
            className="w-[580px] outline-none  bg-transparent border-blue-600  border-b-4  text-blue-600 h-[60px] mt-[110px] p-4 text-2xl flex"
            type={Icon ? 'text' : 'password'}
            placeholder="  Password"
          />
          <p
            onClick={() => setIcon(!Icon)}
            className="text-white text-3xl absolute right-[18%] flex top-[40%]"
          >
            {!Icon ? <IoEyeSharp /> : <FaEyeSlash />}
          </p>
          <button
            onClick={() => exitToAdmin()}
            className="w-[320px] h-[51px] bg-blue-600 text-white font-[400] "
          >
            SIGN IN
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Header;
