import React from "react";
import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import About from "./components/about/about";
import Timeline from "./components/timeline/timeline";
import Testimonials from "./components/testimonials/testimonials";
import Booking from "./components/booking/booking";
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
          <div className="about"></div>
          <div className="timeline"></div>
          <div className="testimonials"></div>
          <div className="booking"></div>
          <div className="contact"></div>
      </div>
  );
}

export default App;
