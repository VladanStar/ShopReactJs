import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <secttion className="single py-5">
      <article className="container">
        <div className="row align-items-center">
          <div className="col-md-10 mx-auto">
            <table className="table table-striped table-hover shadow-lg">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <img src="img/product1.jpg" height="22px" />
                  </td>
                  <td>Orange t-shirt</td>
                  <td>Neki opis</td>
                  <td>1</td>
                  <td>$39</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total</td>
                  <td>$100</td>
                  
                </tr>
                {/* <tr>
                  <th scope="row">3</th>
                  <td>Sunglasses</td>
                  <td>1</td>
                </tr> */}
              </tbody>
            </table>
            <Link to="/" className="button nt-4">
              Payment proces
            </Link>
          </div>
        </div>
      </article>
    </secttion>
  );
};

export default Cart;
