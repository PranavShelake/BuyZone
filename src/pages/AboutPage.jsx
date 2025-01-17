import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <h1 className="text-center display-4">About Us</h1>
        <hr className="my-4" />
        
        <p className="lead text-center mb-5">
          Welcome to <strong>BuyZone</strong>, your one-stop shop for all things fashion, electronics, and home essentials! We strive to bring you the latest trends, high-quality products, and exceptional customer service. Our mission is to make online shopping easy, enjoyable, and accessible for everyone, with a seamless experience from browsing to checkout.
        </p>

        <p className="lead text-center mb-5">
          At <strong>BuyZone</strong>, we carefully curate each product to ensure it meets the highest standards of quality and style. From trendy clothing and stylish accessories to the latest gadgets and home décor, we have everything you need to elevate your lifestyle. Whether you're updating your wardrobe or looking for the perfect gift, we've got you covered.
        </p>

        <p className="lead text-center mb-5">
          Our customers are at the heart of everything we do. We offer free shipping, easy returns, and dedicated customer support to ensure your shopping experience is smooth and hassle-free. At <strong>BuyZone</strong>, we believe that great shopping should be effortless and rewarding, and we’re here to make that happen for you.
        </p>

        <p className="lead text-center mb-5">
          Join us on this exciting journey and explore our wide range of products today! Thank you for choosing <strong>BuyZone</strong>, where shopping meets satisfaction.
        </p>

        <h2 className="text-center py-4 display-5">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card shadow-sm h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mens's Clothing" />
              <div className="card-body text-center">
                <h5 className="card-title">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card shadow-sm h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Women's Clothing" />
              <div className="card-body text-center">
                <h5 className="card-title">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card shadow-sm h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jewelry" />
              <div className="card-body text-center">
                <h5 className="card-title">Jewelry</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card shadow-sm h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Electronics" />
              <div className="card-body text-center">
                <h5 className="card-title">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
