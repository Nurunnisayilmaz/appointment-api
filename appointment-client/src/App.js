import React from "react";
import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Timeline from "./components/timeline/Timeline";
import Testimonials from "./components/testimonials/testimonials";
import Booking from "./components/booking/Booking";
import Contact from "./components/contact/contact";


function App() {
  return (
      <div className="App">
          <div className="header">
              <Header/>
          </div>
          <div className="Home">
              <Home/>
          </div>
          <div className="About">
            <About/>
          </div>
          <div className="timeline"></div>
          <div className="testimonials"></div>
          <div className="booking">
            <Booking/>
          </div>
          <div className="contact"></div>
      </div>
  );
}

export default App;
