import React from 'react';
import watch1 from "../assets/watch1.jpg";
import mobile1 from "../assets/mobile1.jpg";
import watch2 from "../assets/watch2.jpg";

const Home = () => {
  return (
    <header>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://picsum.photos/800/400?random=101" className="d-block w-100" alt="Product 1"/>
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/800/400?random=102" className="d-block w-100" alt="Product 2"/>
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/800/400?random=103" className="d-block w-100" alt="Product 3"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container">
        <h2 className="text-center">Featured Products</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <img src={watch2} className="img-fluid" alt="Product 1"/>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <img src={mobile1} className="img-fluid" alt="Product 2"/>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <img src={watch1} className="img-fluid" alt="Product 3"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
