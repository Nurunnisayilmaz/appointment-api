import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

class DemoCarousel extends Component {

  render() {
    console.log(this.props.sliderItems)
    return (
      <Carousel interval={2000} showIndicators={false} showThumbs={false} infiniteLoop={true} showArrows={false} autoPlay={true} >

        <div className="carousel-img">
          <img alt="vvv" src={this.props.sliderItems[0] ? this.props.sliderItems[0].url : "vvv"}/>
        </div>
        <div className="carousel-img">
          <img alt="vvv" src={this.props.sliderItems[0] ? this.props.sliderItems[1].url : "vvv"}/>
        </div>

        <div className="carousel-img">
          <img alt="vvv" src={this.props.sliderItems[0] ? this.props.sliderItems[2].url : "vvv"}/>
        </div>

      </Carousel>
    );
  }
}


export default DemoCarousel