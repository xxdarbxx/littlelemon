import React from 'react';
import './App.css';

import Home from "./routes/Home";
import Bookings from './routes/Bookings';
import NoPage from "./components/NoPage";
import Confirmation from "./components/Confirmation";
/*
import About from "./routes/About";
import Login from "./routes/Login";
import Menu from "./routes/Menu";
import Reservations from "./routes/Reservations";
import OrderOnline from "./routes/OrderOnline";
*/

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* posto ima "/", ovo se renderuje po difoltu   */}
      <Route path = "/" element = {<Home />}/>
      <Route path="*" element={<NoPage />} />
      <Route path = "/bookings" element = {<Bookings />}/>
      <Route path="/confirmation" element= {<Confirmation />} />
      {/*
      <Route path = "/about" element = {<About />}/>
      <Route path = "/login" element = {<Login />}/>
      <Route path = "/menu" element = {<Menu />}/>
      <Route path = "/order-online" element = {<OrderOnline />}/>
      
      */}
    </Routes>
    </BrowserRouter>
</>
     
  );
}

export default App;
