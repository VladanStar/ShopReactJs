import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
      <section className='single py-5'>
          <article className="container">
              <div className="row align-items-center">
                  <div className="col-md-10 mx-auto">
                      <table className="table table-striped table-hover shadow-lg">
                          <thead>
                              <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Products</th>
                                  <th scope="col">Quantity</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <th scope="row">1</th>
                                  <td>Orange T-shirt</td>
                                  <td>1</td>
                              </tr>
                              <tr>
                                  <th scope="row">2</th>
                                  <td>traveller Bag</td>
                                  <td>1</td>
                              </tr>
                              <tr>
                                  <th scope="row">3</th>
                                  <td>Sunglasses</td>
                                  <td>1</td>
                              </tr>
                          </tbody>
                          
                      </table>
                      <Link to="/" className="button mt-4">Paymen Proces</Link>
                      
                  </div>
                  
              </div>
              
          </article>
          
    </section>
  )
}

export default Admin