import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class Product extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id}>
                                    <img 
                                        src={product.image} 
                                        alt={product.title} 
                                        className="image"
                                    >
                                    </img>
                                    <p>
                                        {product.title}
                                    </p>
                                </a>
                                <div className="product-price">
                                    <div>
                                        {product.price}
                                    </div>
                                    <Button variant="outlined" color="primary">
                                         Add To Cart
                                    </Button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Product;