import React, {useEffect, useState} from "react";
import axios from "axios";
import {server} from "../../config/imageConfig";
import "./home.css";
import Carousel from "../carousel/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile } from '@fortawesome/free-solid-svg-icons'

function Home() {

  const [images, setImages] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      let allImages = await axios.get(`${server.localApi}/photos`);
      console.log(allImages.data.allSlider)
      setImages(allImages.data.allSlider)
    }

    // call the function
    fetchData().catch(console.error);
    console.log(images)
  }, [])

  return (
    <div className="home">
      <div className="carousel-div">
        <Carousel sliderItems={images}/>
      </div>
      <div className="backCard">
        <div className="back-header"><h1>Better <span style={{color: "#247cff"}}>health</span></h1></div>
        <p className="back-p">Medic Care is a Bootstrap 5 Template provided by TemplateMo website. Credits go to FreePik and RawPixel for images used in this template.</p>
        <div className="back-contact">
          <a className="back-button" href="#about">Learn More</a>
          <div className="phone">
            <FontAwesomeIcon icon={faMobile} />
            <span style={{Color:"#717275"}}> 010-020-0340</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home;