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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path:'/assets',
    element: <Assets />,
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
