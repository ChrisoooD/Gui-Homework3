import React from 'react';
import { ReviewFrom } from './reviewForm';
import { ReviewList } from './reviewList';
import { CartService } from '../services/cartService';
import { ProductRepository } from '../api/productRepository';
import { Link } from 'react-router-dom';
import { Header } from "./header";


export class ProductDetails extends React.Component {
    productRepository = new ProductRepository();
    cartService = new CartService();


    componentDidMount() {
        let id = this.props.match.params.productId;
        if (id) {
            this.productRepository.getProduct(id)
                .then(product => this.setState({ product }));
        }
    }

    state = {
    }
    addReview(newReview) {
        var reviews = this.state.product.reviews;
        this.productRepository.addReview(this.props.match.params.productId, newReview);
        reviews.push(newReview);
        this.setState({ reviews });

    }


    render() {
        if (!this.state.product) {
            return <div>Loading...</div>
        }
        return (
            <>
                <div className="container">
                    <Header />
                    <div className="bg-light">
                        <nav aria-label="breadcrumb ">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Tasty snacks</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{this.state.product.name}</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="bg-light clearfix">
                        <div class="jumbotron" >
                            <div><img src={this.state.product.imageUrl} class="float-start" alt="product pricture" /></div>
                            <h1 class="display-4" >{this.state.product.name}</h1>
                            <h3><span class="badge bg-primary text-light" >${this.state.product.price}</span></h3>
                            <p class="lead">{this.state.product.description}.</p>
                            <Link className="text-black btn btn-warning" onClick={() => this.cartService.addToCart(this.state.product)} to="/Cart">Add to cart</Link>
                        </div>

                    </div>

                    <div>
                        <ReviewList reviews={this.state.product.reviews} />
                    </div>

                    <div>
                        <ReviewFrom onReviewAdded={newReview => this.addReview(newReview)} />
                    </div>
                </div>
            </>
        )
    }

}
