import React from 'react';
import mobile1 from "../assets/mobile1.jpg";
import mobile2 from "../assets/mobile2.png";
import laptop1 from "../assets/laptop.jpg";
import laptop2 from "../assets/laptop2.jpg";
import watch1 from "../assets/watch1.jpg";
import watch2 from "../assets/watch2.jpg";

const Products = () => {
  return (
    <div className="container">
      <h2>Our Products</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={mobile1} className="card-img-top" alt="Mobile 1"/>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">Sleek and compact, our Mobile 1 offers cutting-edge features and seamless connectivity, ideal for staying productive and entertained on the move.</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={mobile2} className="card-img-top" alt="Mobile 2"/>
            <div className="card-body">
              <h5 className="card-title">Product 2</h5>
              <p className="card-text">Experience the ultimate in mobile innovation with our Mobile 2, boasting a stunning design, powerful performance, and advanced camera technology for capturing every moment in detail.</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={laptop1} className="card-img-top" alt="Laptop 1"/>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-text">Slim and stylish, our Laptop 1 combines powerful performance with portability, making it perfect for professionals on the go.</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={laptop2} className="card-img-top" alt="Laptop 2"/>
            <div className="card-body">
              <h5 className="card-title">Product 4</h5>
              <p className="card-text">Slim and stylish, our Laptop 2 combines powerful performance with portability, making it perfect for professionals on the go.</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={watch1} className="card-img-top" alt="Watch 1"/>
            <div className="card-body">
              <h5 className="card-title">Product 5</h5>
              <p className="card-text">Elegantly crafted and meticulously designed, our Watch 1 blends timeless style with modern functionality, offering the perfect accessory for any occasion.</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={watch2} className="card-img-top" alt="Watch 2"/>
            <div className="card-body">
              <h5 className="card-title">Product 6</h5>
              <p className="card-text">Experience luxury and precision with our Watch 2, featuring premium materials, sophisticated craftsmanship, and advanced timekeeping technology, designed to elevate your style.</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
