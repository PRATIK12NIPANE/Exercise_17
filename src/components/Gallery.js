import React from 'react';
import laptop1 from "../assets/laptop.jpg";
import laptop2 from "../assets/laptop2.jpg";
import mobile1 from "../assets/mobile1.jpg";
import mobile2 from "../assets/mobile2.png";
import watch1 from "../assets/watch1.jpg";
import watch2 from "../assets/watch2.jpg";

const Gallery = () => {
  return (
    <div className="container">
      <h2>Gallery</h2>
  
      <div className="row">
        <div className="col-md-4 border m-auto">
          <a href={laptop1} data-lightbox="gallery" data-title="Laptop 1">
            <img src={laptop1} className="img-fluid" alt="Laptop 1"/>
          </a>
        </div>
        <div className="col-md-4 border m-auto">
          <a href={laptop2} data-lightbox="gallery" data-title="Laptop 2">
            <img src={laptop2} className="img-fluid" alt="Laptop 2"/>
          </a>
        </div>
        <div className="col-md-4 border m-auto">
          <a href={mobile1} data-lightbox="gallery" data-title="Mobile 1">
            <img src={mobile1} className="img-fluid" alt="Mobile 1"/>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 border m-auto">
          <a href={mobile2} data-lightbox="gallery" data-title="Mobile 2">
            <img src={mobile2} className="img-fluid" alt="Mobile 2"/>
          </a>
        </div>
        <div className="col-md-4 border m-auto">
          <a href={watch1} data-lightbox="gallery" data-title="Watch 1">
            <img src={watch1} className="img-fluid" alt="Watch 1"/>
          </a>
        </div>
        <div className="col-md-4 border m-auto">
          <a href={watch2} data-lightbox="gallery" data-title="Watch 2">
            <img src={watch2} className="img-fluid" alt="Watch 2"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
