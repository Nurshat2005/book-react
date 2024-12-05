import React, { useContext } from 'react';
import { BookContext } from '../../Context/context';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';

const BasketCard = ({ ell }) => {
  const showAlertTrue = () => {
    Swal.fire({
      title: 'Успех!',
      text: 'Ваш заказ был успешно отправлен!',
      icon: 'success',
      confirmButtonText: 'ОК',
    });
  };
  const showAlert = () => {
    Swal.fire({
      title: 'Ошибка!',
      text: 'Пожалуйста, заполните все поля!',
      icon: 'error',
      confirmButtonText: 'ОК',
    });
  };
  const [user, setUser] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const { basket, setBasket } = useContext(BookContext);

  const deleteBasketCard = () => {
    const deleteCard = basket.filter((el) => el?.id !== ell?.id);
    setBasket(deleteCard);
    localStorage.setItem('basket', JSON.stringify(deleteCard));
  };
  const incrementGyountity = () => {
    const incre = basket.map((item) =>
      item.id === ell.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setBasket(incre);
    localStorage.setItem('basket', JSON.stringify(incre));
  };
  const decrementGyountity = () => {
    const incre = basket.map((item) =>
      item.id === ell?.id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
    );
    setBasket(incre);
    localStorage.setItem('basket', JSON.stringify(incre));
  };
  const submitFormtelegram = async () => {
    let my_id = `-1002433061265`;
    let token = '7096908386:AAGR-AoOanGnQquLwoJgULy101MaB9ymL7E';
    let api_key = `https://api.telegram.org/bot${token}/sendMessage`;

    if (user.trim() === '' || adress.trim() === '' || phone.trim() === '') {
      showAlert();
      return;
    } else {
      let newProduct = {
        chat_id: my_id,
        parse_model: 'html',
        text: `
        USER_NAME: ${user}
        USER_ADDRESS: ${adress}
        USER_PHONE: ${phone}
      `,
      };

      await axios.post(api_key, newProduct);
      showAlertTrue();
      setUser('');
      setAdress('');
      setPhone('').catch((error) => {
        console.error('Ошибка при отправке данных:', error);
        showAlert();
      });
    }
  };

  return (
    <div className="w-[100%] flex mx-auto justify-center gap-[50px]">
      <div className=" w-[1000px] flex h-[520px] border-[2px] border-solid border-blue-700 gap-[50px] justify-start overflow-hidden">
        <img className="rounded-[5px]" src={ell?.url} alt="img" />
        <div className=" flex flex-col items-start">
          <h1 className="text-4xl mb-[40px]">{ell?.name}</h1>
          <h2 className="text-3xl">{ell?.price ? `${ell?.price * ell?.quantity}$` : null}</h2>
          <div className=" flex border-solid border-[2px] border-blue-700 justify-between w-[160px] mt-[40px]">
            <button
              className=" w-[50px] bg-blue-700 text-white text-[20px]"
              onClick={() => decrementGyountity()}
            >
              -
            </button>
            <h1 className="text-[20px] bg-white">{ell?.quantity}</h1>
            <button
              className="w-[50px] bg-blue-700 text-white text-[20px]"
              onClick={() => incrementGyountity()}
            >
              +
            </button>
          </div>
          <div className="flex flex-col">
            <h1 className="mt-[30px] mb-[20px] font-[500]">Description</h1>
            <p className="mb-[50px] text-xs font-[300] ">{ell?.description}</p>
          </div>
          <button
            onClick={() => deleteBasketCard()}
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-700 dark:focus:ring-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
          >
            Delete
          </button>
        </div>
      </div>
      <div className="flex flex-col w-[25%] justify-auto gap-[40px]">
        <h1 className="text-2xl font-bold text-center text-blue-600 p-4">
          Ваш заказ будет отправлен через Telegram.
        </h1>

        <form
          onSubmit={submitFormtelegram}
          className="w-[100%] flex flex-col gap-[40px] justify-auto"
        >
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setUser(e.target.value)}
              type="text"
              name="floating_password"
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-500 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setAdress(e.target.value)}
              type="text"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />

            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User address
            </label>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              name="floating_password"
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User phone
            </label>
          </div>
          <button
            type="submit"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default BasketCard;
