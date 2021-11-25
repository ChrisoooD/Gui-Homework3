import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ProductRepository } from '../api/productRepository';

export const ProductList = props => {
    const [products, setProducts] = useState(undefined);
    const productRepository = new ProductRepository();
    
    if (!productRepository) {
        return <div>Loading...</div>
    }

    return <div className="container">
        <h2>something</h2>
    </div>
};