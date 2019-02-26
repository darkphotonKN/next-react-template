import React, { Component } from 'react';

/* 
Provide this component with an array of images: 

const carouselImgs = [
  { name: 'xyz', src='/static/img/banners/example.png'}, 
  { name: 'xyz', src='/static/img/banners/example.png'}, 
  { name: 'xyz', src='/static/img/banners/example.png'}
]

Place the first image you want to render on the top, and the rest in order
(if there is one).

'name' will be used for both the overlay title as well as the "alt" attribute
*/

class Carousel extends Component {
  imgOutput = (img, index) => {
    // load first index page first
    if (index === 0) {
      return (
        <div className="carousel-item active" key={img.src + img.name}>
          <img className="d-block w-100" src={img.src} alt={img.name} />
          <div className="carousel-label">{img.name}</div>
        </div>
      );
    }
    return (
      <div className="carousel-item" key={img.src}>
        <img className="d-block w-100" src={img.src} alt={img.name} />
        <div className="carousel-label">{img.name}</div>
      </div>
    );
  };

  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {this.props.carouselImgs.map((img, index) => {
            return this.imgOutput(img, index);
            // if using inline ternary instead
            // return index === 0 ? (
            //   <div className="carousel-item active">
            //     <img className="d-block w-100" src={img.src} alt={img.name} />
            //   </div>
            // ) : (
            //   <div className="carousel-item">
            //     <img className="d-block w-100" src={img.src} alt={img.name} />
            //   </div>
            // );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
