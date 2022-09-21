import React from 'react'

const Footer = () => {
  return (
      <footer className="py-5 bg-dark ">
          <div className="container  ">
              <div className="row ">
                  <div className="col-md-3 col-ms-6">
                      <h4 id="white">About</h4>
                      <p id="whiteP">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
                          distinctio!. Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sequi, distinctio
                      </p>
                  </div>
                  <div className="col-md-3 col-ms-6">
                      <h4 id="white">Top products</h4>
                      <ul className="list-unstyled">
                          <li><a href="#">Jeans</a></li>
                          <li><a href="#">Bags</a></li>
                          <li><a href="#">Accesors</a></li>
                          <li><a href="#">Phones</a></li>
                      </ul>
                  </div>
                  <div classNameName="col-md-3 col-ms-6">
                      <h4 id="white">Quick Links</h4>
                      <ul classNameName="list-unstyled">
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">Shop</a></li>
                          <li><a href="#">Contact</a></li>
                      </ul>
                  </div>
                  <div classNameName="col-md-3 col-ms-6">
                      <a classNameName="" href="index.html">
                          <img style={{ width: '150px' }}
                              classNameName=" img-fluid rounded shadow-lg border border-white border-5 md-4"
                              src="./img/logo.png"
                              alt="..."
                          /></a>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer