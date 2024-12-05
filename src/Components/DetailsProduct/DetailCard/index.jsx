import React from 'react';

const DetailCard = ({ el }) => {
  return (
    <div className="w-[70%] flex items-start justify-between">
      <div className="">
        <img className="w-[426px] h-[660px]" src={el.url} alt="img" />
      </div>
      <div className=" flex flex-col justify-between items-start w-[600px] h-[660px] ">
        <h1 className="text-2xl mb-[20px]">{el.name}</h1>
        <h1 className="font-[700] mb-[20px]">{el.price ? `${el.price}$` : null}</h1>
        <pre>
          <h1 className="capitalize text-gray-700 font-[100] mb-[30px]">Genre : {el.category}</h1>
        </pre>
        <div className=" flex gap-[30px] border-blue-700 border-solid border-[3px] mb-[20px]">
          <button className="w-[40px] bg-blue-700 text-white">-</button>
          <h1 className="">{el.quantity}</h1>
          <button className="w-[40px] bg-blue-700 text-white">+</button>
        </div>
        <h2 className="font-[600px] text-[24px] text-[#595959] mb-[10px]">Description</h2>
        <p className=" text-[#3D3D3D] mb-[20px]">{el.description}</p>
        <div className="flex items-center gap-[30px]">
          <button className="w-[200px] text-blue-700 border-blue-700 border-solid border-[2px] h-[50px]  font-[600]">
            Add to basket
          </button>
          <button className="w-[200px] text-blue-700 border-blue-700 border-solid border-[2px] h-[50px] font-[600]">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
