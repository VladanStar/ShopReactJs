import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Single = ({items}) => {
    let params = useParams();
  return (
<>
   
     {/* <!-- shop heading --> */}
     <section className="shopHeading text-center bg-light py-5">
     <h2 className="fw-bolder">Single product page</h2>
     <p className="fw-lighter">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
 </section>
    
    <section className="single py-5">
        <article className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                <img className="img-fluid rounded border shadow-lg" src="./img/product5.jpg" alt=""/>
                </div>
                <div className="col-md-6">
                    <div className="price d-flex justify-content-between">
                        <h5 className="card-title"> Sunglasses</h5>
                        <h5>$167</h5>
                    </div>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis officia dolore quibusdam tenetur aut aperiam atque non exercitationem officiis!
                        
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reprehenderit, iure dignissimos harum repellendus minus culpa quaerat libero. Optio, accusantium.
                    </p>
                    <Link to="/cart" className="button">Add To Cart</Link>
                </div>
            </div>

        </article>
    </section>
    
    </>
  )
}

export default Single