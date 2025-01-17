import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
        <img
  className="card-img img-fluid"
  src="./assets/hero.avif"
  alt="Card"
  style={{ height: "400px" , width:"2000px", objectFit: "fill" }}  // Set the height here
/>

          <div className="card-img-overlay d-flex align-items-center">
          <div className="container">
            <h5 className="card-title fs-1 text fw-lighter">Explore Our Latest Collection</h5>
            <p className="card-text fs-5 d-none d-sm-block">
                    Discover trendy styles, exclusive deals, and the best shopping experience! 
                      Shop now for new arrivals and enjoy free shipping on all orders.
             </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
