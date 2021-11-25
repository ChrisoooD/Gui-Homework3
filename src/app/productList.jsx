import React, { useState, useEffect } from 'react';
import { ProductRepository } from '../api/productRepository';
import { DisplayList } from './displayList';
import { Card, CardGroup, Badge, Button } from 'react-bootstrap'

export const ProductList = props => {
    const [products, setProducts] = useState();
    const productRepository = new ProductRepository();

    useEffect(() => {
        onSearch();
    }, []);

    let onSearch = params => {
        productRepository.getProducts().then(products => setProducts(products));
    }


    return <div className="container">
        <div className="mx-5 mb-3 px-3 py-2 bg-light">
            <nav aria-label="breadcrumb ">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">Tasty snacks</li>
                </ol>
            </nav>
        </div>
        <DisplayList products={products} />
    </div>
};