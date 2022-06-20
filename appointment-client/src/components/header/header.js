import React from 'react';
import "./header.css";


class header extends React.Component {
    render() {
        return (

            <div className="header">

                <nav className="navbar bg-light shadow-lg">

                    <div className="nav-item">
                            <a className="nav-link " href="#hero">Home</a>
                    </div>

                    <div className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                    </div>

                    <div className="nav-item">
                            <a className="nav-link" href="#timeline">Timeline</a>
                    </div>

                    <div className="nav-item">
                            <div className="main">
                              <a className="navbar-brand medic " href="index.html">Medic Care</a>
                              <a className="navbar-brand specialist" href="index.html">Health Speacialiste</a>

                            </div>
                    </div>

                    <div className="nav-item">
                            <a className="nav-link" href="#reviews">Testimonials</a>
                    </div>

                    <div className="nav-item">
                            <a className="nav-link" href="#booking">Booking</a>
                    </div>

                    <div className="nav-item">
                            <a className="nav-link " href="#contact">Contact</a>
                    </div>

                </nav>

            </div>

        )
    }
}

export default header;
