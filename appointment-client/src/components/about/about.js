import React, {useEffect, useState} from "react";
import "./about.css";
import axios from "axios";
import {server} from "../../config/imageConfig";


function About() {

  const [images, setImages] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      let allImages = await axios.get(`${server.localApi}/photos`);
      setImages(allImages.data.allSlider)
    }

    // call the function
    fetchData().catch(console.error);
    console.log(images)
  }, [])
  return (

    <div className="about">

      <div className="container">

        <div className="text">
          <div className="doctor-header">
            <h1>Meet Dr. Carson</h1>
          </div>
          <div className="doctor-p">
            <p>
              Protect yourself and others by wearing masks and washing hands frequently. Outdoor is safer than indoor
              for gatherings or holding events. People who get sick with Coronavirus disease (COVID-19) will experience
              mild to moderate symptoms and recover without special treatments.

            </p>
            <p>
              You can feel free to use this CSS template for your medical profession or health care related websites.
              You can support us a little via PayPal if this template is good and useful for your work.

            </p>
          </div>
        </div>

        <div className="batch">
          <div style={{padding:"95px"}}>
            <div>
              <span className="twelwe">12</span> Years
            </div>
            <div>
              of Experiences
            </div>
          </div>

        </div>


      </div>

      <div className="container doctorImages">
        <img style={{width:"700px"}} alt="vvv" src={images[0] ? images[3].url : "vvv"}/>
        <img style={{width:"700px"}} alt="vvv" src={images[0] ? images[4].url : "vvv"}/>
      </div>

    </div>

  )
}

export default About;
