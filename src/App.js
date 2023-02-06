import React, {useState,useEffect} from 'react'
import './App.css'
import 'swiper/swiper.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homepage from './Pages/Homepage';
import NotFound from './Pages/NotFound';
import ReactGA from 'react-ga';


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
  const TRACKING_ID = "G-DVSQY565V0";
  ReactGA.initialize(TRACKING_ID);
  const [walletAddress, setWalletAddress] = useState("")
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Context.Provider value={{walletAddress, setWalletAddress}}>
        {/* <RouterProvider router={router} /> */}

        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route element={<ProtectedRoutes />}> */}
            <Route path='/assets' element={<Assets />} />
            <Route path='/assets/:name' element={<Utility />} />
          {/* </Route> */}
          <Route path='/:name' element={<ProductPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </Context.Provider>
  );
}

export default App;
