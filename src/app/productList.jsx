import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductRepository } from '../api/productRepository';
import { CartService } from '../services/cartService';
import { Card, CardGroup, Badge } from 'react-bootstrap'
import { Header } from "./header";

export const ProductList = props => {
    const [products, setProducts] = useState([]);
    const productRepository = new ProductRepository();
    const cartService = new CartService();

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
        <Header />
        <div className="bg-light">
            <nav aria-label="breadcrumb ">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item text-secondary">Tasty snacks</li>
                </ol>
            </nav>
        </div>
        <CardGroup >
            {
                products.map(product =>

                    <Card className="mx-3">
                        <Card.Img variant="top" src={product.imageUrl} />
                        <div >
                            <Badge pill bg="success" className="text-light">
                                {product.price}
                            </Badge>{' '}
                        </div>

                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                        </Card.Body>
                        <Link className="text-light btn btn-info m-3 p-2" to={`/products/${product.id}`}>Product Details</Link>
                        <Link className="text-black btn btn-warning m-3 p-2" onClick={() => cartService.addToCart(product)} to="/Cart">Add to cart</Link>

                    </Card>
                )
            }
        </CardGroup>
    </div>
};