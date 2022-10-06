import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (idx) => {
    let tempCart = [...cart];
    tempCart.splice(idx, 1);
    setCart(tempCart);
  };
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
                {cart.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <th scope="row">{item.id}</th>
                      <td>
                        <img src={item.img} height="30px" />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.desc}</td>
                      <td>{item.qty}</td>
                      <td>${item.price}</td>
                      <td>
                        <button
                          onClick={() => removeFromCart(idx)}
                          className="btn btn-danger"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}

                <th scope="row"></th>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setCart([]);
                    }}
                  >
                    ClearCart
                  </button>
                </td>
                <td></td>
                <td></td>
                <td>Total:</td>
                <td>
                  $
                  {cart.reduce((acc, cur) => {
                    return acc + cur.price * cur.qty;
                  }, 0)}
                </td>
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
