import React, {useState} from 'react'
import './App.css'
import 'swiper/swiper.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homepage from './Pages/Homepage';
import NotFound from './Pages/NotFound';

import 'react-toastify/dist/ReactToastify.css';
import { Context } from './Context';

import {
  // createBrowserRouter,
  // RouterProvider,
  Routes,
  Route
} from "react-router-dom";

import Assets from './Pages/Assets';
import Utility from './component/utility/Utility';
import ProductPage from './Pages/ProductPage';
import ProtectedRoutes from './ProtectedRoutes';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />,
//   },
//   {
//     path: '/assets',
//     element: <Assets />,
//   },
//   {
//     path:'/assets/:name',
//     element: <Utility />,
//   },
//   {
//     path: "/:name",
//     element: <ProductPage />
//   },
//   {
//     path: '*',
//     element: <NotFound />
//   }
// ]);


function App() {

  const [walletAddress, setWalletAddress] = useState("")

  return (
    <Context.Provider value={{walletAddress, setWalletAddress}}>
        {/* <RouterProvider router={router} /> */}

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/assets' element={<Assets />} />
            <Route path='/assets/:name' element={<Utility />} />
          </Route>
          <Route path='/:name' element={<ProductPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </Context.Provider>
  );
}

export default App;
