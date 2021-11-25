import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductRepository } from '../api/productRepository';
import { Card, CardGroup, Badge, Button } from 'react-bootstrap'

export const ProductList = props => {
    const [products, setProducts] = useState([]);
    const productRepository = new ProductRepository();

    useEffect(() => {
        onLoad();
    }, []);

    let onLoad = params => {
        productRepository.getProducts().then(products => setProducts(products));
    }

    if (!products) {
        return <div>Loading...</div>
    }

    return <div className="container">
        <div className="mx-5 mb-3 px-3 py-2 bg-light">
            <nav aria-label="breadcrumb ">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">Tasty snacks</li>
                </ol>
            </nav>
        </div>
        <CardGroup >
                {
                    products.map(product =>

                        <Card>
                            <Card.Img variant="top" src={product.imageUrl} />
                            <div>
                                <Badge pill bg="success">
                                    {product.price}
                                </Badge>{' '}
                            </div>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                            </Card.Body>
                            <Link to={`/products/${product.id}`}>Product Details</Link>
                            <Link to="/Cart">Add to cart</Link>

                        </Card>
                    )
                }
            </CardGroup>
    </div>
};