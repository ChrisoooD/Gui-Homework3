import { Link } from 'react-router-dom';
import { Card, CardGroup, Badge, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const DisplayList = props => {
    if (!props.products) {
        return <div>Loading...</div>
    }

    return (
        <>
            <CardGroup >
                {
                    props.products.map(product =>

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
                            <Link to={`products/${product.id}`}>Product Details</Link>
                            <Link to="/Cart">Add to cart</Link>

                        </Card>
                    )
                }
            </CardGroup>

        </>)
};