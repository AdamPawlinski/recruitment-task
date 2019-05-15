import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ products, match }) => {
    return (
        <React.Fragment>
            {
                products.map(             
                    product => (                           
                        <div className="product-card" key={product.productName}>   
                            <Link to={`${match.url}product/${product.productName}`}>
                                <div>
                                    <img src={product.personAvatar} alt={`${product.productName} product image`} />
                                    <h3>{product.productName}</h3>                    
                                    <p>{product.stringShort}</p>
                                </div>
                            </Link>
                        </div>
                    )
                )            
            }        
        </React.Fragment> 
    )    
};

export default Product;