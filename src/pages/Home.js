import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({items}) => {
  return (
      <>
          <div
              id="carouselExampleIndicators"
              className="carousel slide carousel-fade"
              data-bs-ride="true"
          >
              <div className="carousel-indicators">
                  <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                  ></button>
                  <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                  ></button>
              </div>
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img src="./img/slide_1.jpg" className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block text-end">
                          {/* <!-- <h5>First Slide Label </h5>
                          <p>Some representative placeholder content for the first slide.</p> --> */}
                          <p className="lead">Woman collection</p>
                          <h2 className="display-2 fw-bold m-4">
                              Show <span>your <br />personal</span> style
                          </h2>
                          <p>
                              Lorem ipsum dolor sit amet consectetur, <br />adipisicing elit.
                              Blanditiis, odit!
                          </p>
                          <Link to="#" className="button">View Collection</Link>
                      </div>
                  </div>
                  <div className="carousel-item">
                      <img src="./img/slide_2.jpg" className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block text-start">
                          {/* <!-- <h5>First Slide Label </h5>
                          <p>Some representative placeholder content for the first slide.</p> --> */}
                          <p className="lead">Man collection</p>
                          <h2 className="display-2 fw-bold m-4">
                              Show <span>your <br />personal</span> style
                          </h2>
                          <p>
                              Lorem ipsum dolor sit amet consectetur, <br />adipisicing elit.
                              Blanditiis, odit!
                          </p>
                          <Link to="#" className="button">View Collection</Link>
                      </div>
                  </div>
              </div>
              <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
              >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
              >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
          {/* <!-- Products --> */}
          <section className="products py-5">
              <article className="container">
                  {items.map((item, ind) => (
                      <div className="row">
                      <div class="col-md-4 col-ms-6 mb-">
                          <div class="card" style="width: 18rem">
                              <div class="holder">
                                  <img src="./img/product1.jpg" class="card-img-top" alt="..." />
                              </div>
                              <div class="card-body p-4">
                                  <div class="price d-flex justify-content-between">
                                      <h5 class="card-title">Orange t-shirt</h5>
                                      <h5>$39</h5>
                                  </div>

                                  <p class="card-text">
                                      Some quick example text to build on the card title and make up
                                      the bulk of the card's content.
                                  </p>
                                  <a href="single.html" class="button">Shop Now</a>
                              </div>
                          </div>
                          </div>
                          </div>
                  ))}
                  {/* 
                      <div className="col-md-4 col-ms-6 mb-">
                          <div className="card" style={{ width: "18rem" }}>
                              <div className="holder">
                                  <img src="./img/product1.jpg" className="card-img-top" alt="..." />
                              </div>
                              <div className="card-body p-4">
                                  <div className="price d-flex justify-content-between">
                                      <h5 className="card-title">Orange t-shirt</h5>
                                      <h5>$39</h5>
                                  </div>

                                  <p className="card-text">
                                      Some quick example text to build on the card title and make up
                                      the bulk of the card's content.
                                  </p>
                                  <Link to="/single" className="button">Shop Now</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-ms-6">
                          <div className="card" style={{ width: "18rem" }}>
                              <div className="holder">
                                  <img src="./img/product2.jpg" className="card-img-top" alt="..." />
                              </div>
                              <div className="card-body p-4">
                                  <div className="price d-flex justify-content-between">
                                      <h5 className="card-title">Traveller Bug</h5>
                                      <h5>$21</h5>
                                  </div>
                                  <p className="card-text">
                                      Some quick example text to build on the card title and make up
                                      the bulk of the card's content.
                                  </p>
                                  <Link to="/single" className="button">Shop Now</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-ms-6">
                          <div className="card" style={{ width: "18rem" }}>
                              <div className="holder">
                                  <img src="./img/product3.jpg" className="card-img-top" alt="..." />
                              </div>
                              <div className="card-body p-4">
                                  <div className="price d-flex justify-content-between">
                                      <h5 className="card-title">Sunglasses</h5>
                                      <h5>$34</h5>
                                  </div>
                                  <p className="card-text">
                                      Some quick example text to build on the card title and make up
                                      the bulk of the card's content.
                                  </p>
                                  <Link to="/single" className="button">Shop Now</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-ms-6">
                          <div className="card" style={{ width: "18rem" }}>
                              <div className="holder">
                                  <img src="./img/product4.jpg" className="card-img-top" alt="..." />
                              </div>
                              <div className="card-body p-4">
                                  <div className="price d-flex justify-content-between">
                                      <h5 className="card-title">Woman Watch</h5>
                                      <h5>$55</h5>
                                  </div>
                                  <p className="card-text">
                                      Some quick example text to build on the card title and make up
                                      the bulk of the card's content.
                                  </p>
                                  <Link to="/single" className="button">Shop Now</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-ms-6">
                          <div className="card" style={{ width: "18rem" }}>
                              <div className="holder">
                                  <img src="./img/product5.jpg" className="card-img-top" alt="..." />
                              </div>
                              <div className="card-body p-4">
                                  <div className="price d-flex justify-content-between">
                                      <h5 className="card-title">Summer Hat</h5>
                                      <h5>$29</h5>
                                  </div>
                                  <p className="card-text">
                                      Some quick example text to build on the card title and make up
                                      the bulk of the card's content.
                                  </p>
                                  <Link to="/single" className="button">Shop Now</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-ms-6">
                          <div className="card" style={{ width: "18rem" }}>
                              <div className="holder">
                                  <img src="./img/product6.jpg" className="card-img-top" alt="..." />
                              </div>
                              <div className="card-body p-4">
                                  <div className="price d-flex justify-content-between">
                                      <h5 className="card-title">Roller Skates</h5>
                                      <h5>$56</h5>
                                  </div>
                                  <p className="card-text">
                                      Some quick example text to build on the card title and make up
                                      the bulk of the card's content.
                                  </p>
                                  <Link to="single.html" className="button mb-8">Shop Now</Link>
                              </div>
                          </div>
                      </div>
                  </div> */}
              </article>
          </section>
          <section className="about py-5 bg-light">
              <article className="container">
                  <div className="row">
                      <div className="col-md-3 col-ms-6 text-center">
                          <div className="border p-4 border-dark rounded">
                              <i className="fa-sharp fa-solid fa-hand-holding-dollar"></i>
                              <h5 className="fw-bolder my-2">Money Guarantee</h5>
                              <p>Lorem, ipsum dolor.</p>
                          </div>
                      </div>
                      <div className="col-md-3 col-ms-6 text-center">
                          <div className="border p-4 border-dark rounded">
                              <i className="fa-sharp fa-solid fa-truck-fast"></i>
                              <h5 className="fw-bolder my-2">Free Delivery</h5>
                              <p>Lorem, ipsum dolor.</p>
                          </div>
                      </div>
                      <div className="col-md-3 col-ms-6 text-center">
                          <div className="border p-4 border-dark rounded">
                              <i className="fa-sharp fa-solid fa-headset"></i>
                              <h5 className="fw-bolder my-2">Always Support</h5>
                              <p>Lorem, ipsum dolor.</p>
                          </div>
                      </div>
                      <div className="col-md-3 col-ms-6 text-center">
                          <div className="border p-4 border-dark rounded">
                              <i className="fa-sharp fa-solid fa-building-lock"></i>
                              <h5 className="fw-bolder my-2">Secure payments</h5>
                              <p>Lorem, ipsum dolor.</p>
                          </div>
                      </div>
                  </div>
              </article>
          </section>
          {/* <!-- discaver now --> */}
          <section className="discoverOff d-flex align-items-center">
              <article className="container text-end">
                  <p className="lead">Woman Collectin</p>
                  <h2 className="display-2 fw-bolder">50% OFF</h2>
                  <Link to="#" className="button md-4">Discover NOW</Link>
                  <p>Limited time offer</p>
              </article>
          </section>
      
      </>
  )
}

export default Home