import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="topbar bg-light py-2">
      <article className="container d-flex justify-content-between">
        <div>Phone: 0601531175 | Email:vladancupric@gmail.com</div>
        <div>
          <Link to="home">Gtf Card</Link> | <Link to="/">Contact</Link>
        </div>
      </article>
      {/* </section>
    <!-- NavBar-- > */}
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="index.html">
            {/* <img src="./img/logo.png" /> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/single">
                  Single{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
