import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../Context/context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
  const { books, setBooks } = useContext(BookContext);
  const [ProductName, setProductName] = useState('');
  const [ProductPrice, setProductPrice] = useState('');
  const [ProductDes, setProductDes] = useState('');
  const [ProductUrl, setProductUrl] = useState('');
  const [ProductCategory, setProductCategory] = useState('');

  const ErrorMassage = () => {
    toast.error('❌ Please fill in all required fields!', {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };
  const ErrorMessage = () => {
    toast.error('🤦 You have added this product!', {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };
  const SuccesMessage = () => {
    toast.success(' ✅ You have added a product!', {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductUrl(reader.result);
    reader.readAsDataURL(file);
  };

  const someBooks = books.some((el) => el.url === ProductUrl);

  function CreateBookProduct() {
    let bookobj = {
      id: books.length ? books[books.length - 1].id + 1 : 1,
      name: ProductName,
      price: ProductPrice,
      description: ProductDes,
      url: ProductUrl,
      quantity: 1,
      category: ProductCategory,
    };

    if (
      ProductName.trim() === '' ||
      ProductPrice.trim() === '' ||
      ProductDes.trim() === '' ||
      ProductUrl.trim() === '' ||
      ProductCategory.trim() === ''
    ) {
      ErrorMassage();
    } else if (someBooks) {
      ErrorMessage();
    } else {
      let results = [...books, bookobj];
      setBooks(results);
      localStorage.setItem('books', JSON.stringify(results));
      setProductDes('');
      setProductName('');
      setProductPrice('');
      setProductCategory('');
      SuccesMessage();
    }
  }

  return (
    <div>
      <div className="container">
        <div className=" mt-[50px] ">
          <div className=" flex justify-center gap-[100px] text-blue-700">
            <div className="  ">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-[459px] h-[509px] border-2 border-blue-700  rounded-lg cursor-pointer  dark:bg-blue-700 hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:bg-blue-700"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Upload photo</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input onChange={onChange} id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <div className=" flex flex-col items-center gap-[30px]">
              <input
                onChange={(e) => setProductName(e.target.value)}
                className="w-[321px] h-[60px] p-4 border-[2px] border-blue-700"
                type="text"
                placeholder="  Product Name"
                value={ProductName}
              />
              <div className=" flex items-center justify-between gap-[14px] ">
                <input
                  onChange={(e) => setProductCategory(e.target.value)}
                  className="w-[175px] h-[60px] border-[2px] border-blue-700 p-4"
                  type="text"
                  placeholder=" Category"
                  value={ProductCategory}
                />
                <input
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="w-[134px] h-[60px] border-[2px] border-blue-700 p-4"
                  type="text"
                  placeholder="Price"
                  value={ProductPrice}
                />
              </div>
              <div className="flex flex-col gap-[50px]">
                <textarea
                  value={ProductDes}
                  onChange={(e) => setProductDes(e.target.value)}
                  className=" w-[321px] h-[310px] border-[2.5px] border-blue-700 p-4"
                  placeholder="Product Description"
                  name=""
                  id=""
                  cols="50"
                  rows="30"
                ></textarea>
                <ToastContainer />
                <button
                  onClick={() => CreateBookProduct()}
                  className="uppercase  w-[321px] h-[51px] border-[2.5px] border-blue-700"
                >
                  save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
