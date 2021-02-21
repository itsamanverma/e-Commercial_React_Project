import React, { Component } from 'react';
import data from './data.json';
import Product from './components/Product.js';

class App extends Component {

    state={
        products: data.products,
        size: '',
        sort: '',
      };

  render() {

    return (
      <div className="grid-container">
          <header>
            <a href="/">React Shopping Cart</a>
          </header>
          <main> 
              <div className="container">
                  <div className="main">
                      <Product 
                        products = {this.state.products}
                      />
                  </div>
                  <div className="sidebar">
                      Cart items
                  </div>
              </div>
          </main>
          <footer>All right is reversed.</footer>
      </div>
    )
  }
}

export default App;