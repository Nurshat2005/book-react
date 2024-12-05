import React from 'react';
import Home from './Components/Home';
import Searh from './Components/Search';
import Basket from './Components/Basket';
import Favorite from './Components/Favorite';
import Admin from './Components/Admin';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Detective from './Components/Detective';
import Fantasy from './Components/Fantasy';
import Adventures from './Components/ Adventures';
import Scientific from './Components/Scientific';
import DetailsProduct from './Components/DetailsProduct';
import { useContext } from 'react';
import { BookContext } from './Components/Context/context';

const App = () => {
  let route = [
    {
      id: 1,
      Link: '/',
      element: <Home />,
    },
    {
      id: 2,
      Link: '/search',
      element: <Searh />,
    },
    {
      id: 3,
      Link: '/basket',
      element: <Basket />,
    },
    {
      id: 4,
      Link: '/history',
      element: <Favorite />,
    },
    {
      id: 5,
      Link: '/admin',
      element: <Admin />,
    },
    {
      id: 6,
      Link: '/adventures',
      element: <Adventures />,
    },
    {
      id: 7,
      Link: '/detective',
      element: <Detective />,
    },
    {
      id: 8,
      Link: '/scientific',
      element: <Scientific />,
    },
    {
      id: 9,
      Link: '/fantasy',
      element: <Fantasy />,
    },
    {
      id: 10,
      Link: `/detailsProduct/:id`,
      element: <DetailsProduct />,
    },
  ];
  return (
    <div>
      <Header />
      <Routes>
        {route.map((el) => (
          <Route path={el.Link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
