import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Notfound from "./Components/NotFound/NotFound";


let routers = createBrowserRouter([
    {path:'' , element:<Layout/>, children:[
      {index:true , element:<Home/>},
      {path:'about' , element:<About/>},
      {path:'Portfolio' , element:<Portfolio/>},
      {path:'Contact' , element:<Contact/>},
      {path:'*' , element:<Notfound/>},
    ]}
])

export default function App() {
  return <RouterProvider router={routers}></RouterProvider>
}
