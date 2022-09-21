import React from 'react'

const Navbar = () => {
    return (
    
    <section className="topbar bg-light py-2">
      <article className="container d-flex justify-content-between">
        <div>Phone: 0601531175 | Email:vladancupric@gmail.com</div>
        <div><a href="#">Gtf Card</a> | <a href="">Contact</a></div>
      </article>
    {/* </section>
    <!-- NavBar-- > */}
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src="./img/logo.png" />
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
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Single </a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
            
            </section>
  )
}

export default Navbar