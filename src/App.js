import React from 'react'
import './App.css'
import 'swiper/swiper.min.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";  
import Homepage from './Pages/Homepage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Assets from './Pages/Assets';
import Utility from './component/utility/Utility';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path:'/assets',
    element: <Assets />,
  },
  {
    path:'/utility/:name',
    element: <Utility />,
  }
]);


function App() {
  return (
    <div className="app-container" style={{overflow: "hidden"}}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
