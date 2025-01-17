import React from "react";

const Footer = () => {
  return (
    <>
      
      <div className="contact-container bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Me</h2>
          <hr className="w-25 mx-auto mb-4" />
          <p className="text-center mb-4">
            Below are the details to reach out to me!
          </p>

          <div className="row text-center">
            <div className="col-12 col-md-4 mb-4">
              <h3>
                <i className="fa fa-phone" style={{ color: "#ff6600" }}></i>
                <br />
                +918249816651
              </h3>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <h3>
                <i className="fa fa-envelope" style={{ color: "#f72222" }}></i>
                <br />
                pranavshelake99@gmail.com
              </h3>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <h3>
                <i className="fa fa-map-marker" style={{ color: "#c6f212" }}></i>
                <br />
                <a
                  href="https://maps.app.goo.gl/9Xi2gXtdMenD6LfJ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  Warananagar, Kolhapur Maharashtra
                </a>
              </h3>
            </div>
          </div>

          {/* Social Icons */}
          <div className="text-center">
            <a
              href="https://leetcode.com/u/pranavshelake99/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 fs-2"
            >
              <i className="fa fa-code" style={{ color: "#FDB833" }}></i>
            </a>
            <a
              href="https://github.com/PranavShelake"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 fs-2"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/_pranavshelake?utm_source=qr&igsh=aWdiZDY4YzloZ2tv"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 fs-2"
            >
              <i className="fa fa-instagram" style={{ color: "#E01A4F" }}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pranav-shelake-bb84412ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 fs-2"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
