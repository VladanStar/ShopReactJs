import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h4 className="mb-4">About</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              veniam a numquam aliquam itaque placeat!
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4 className="mb-4">Top products</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Jeans</Link>
              </li>
              <li>
                <Link to="">Bags</Link>
              </li>
              <li>
                <Link to="">Accesories</Link>
              </li>
              <li>
                <Link to="">Phones</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4 className="mb-4">Quick links</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
              <li>
                <Link to="">Shop</Link>
              </li>
              <li>
                <Link to="">Kontakt</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="index.html">
              <img
                src="img/logo.png"
                alt=""
                className="img-fluid rounded rounded-3 shadow-lg border border-white border-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
