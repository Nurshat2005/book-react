import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from '../Context/context';
import DetailCard from './DetailCard';

const DetailsProduct = () => {
  const { books } = useContext(BookContext);
  const { id } = useParams();

  const book = books.find((el) => el.id === parseInt(id));

  return (
    <div className="mt-[30px]">
      <div className="container">
        <div className="flex flex-col justify-center">
          <DetailCard el={book} />
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
