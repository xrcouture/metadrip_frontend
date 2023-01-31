import React, {useState} from 'react'
import './App.css'
import 'swiper/swiper.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homepage from './Pages/HomePage';

import { Context } from './Context';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Assets from './Pages/Assets';
import Utility from './component/utility/Utility';
import ProductPage from './Pages/ProductPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: '/assets',
    element: <Assets />,
  },
  {
    path:'/utility/:name',
    element: <Utility />,
  },
  {
    path: "/:name",
    element: <ProductPage />
  }
]);


function App() {

  const [walletAddress, setWalletAddress] = useState("")

  return (
    <Context.Provider value={{walletAddress, setWalletAddress}}>
        <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
