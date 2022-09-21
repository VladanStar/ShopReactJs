import React from "react";

const Navbar = () => {
  return (
    <section className="topbar bg-light py-2">
      <article className="container d-flex justify-content-between">
        <div>Phone: 0601531175 | Email:vladancupric@gmail.com</div>
        <div>
          <a href="#">Gtf Card</a> | <a href="">Contact</a>
        </div>
      </article>
      {/* </section>
    <!-- NavBar-- > */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="img/logo.png" alt="" />
          </a>
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
                <Link className="nav-link" to="/Single">
                  Single
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Admin">
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cart">
                  Cart({cart.length})
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
