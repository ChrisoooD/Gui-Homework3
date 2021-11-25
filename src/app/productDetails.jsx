import React from 'react';
import { Product } from '../models/product';
import { ReviewFrom } from './reviewForm';
import { ReviewList } from './reviewList';
import { ProductRepository } from '../api/productRepository';



export class ProductDetails extends React.Component {
    productRepository = new ProductRepository();
    state = {
     product:new Product()
    }

    // addReview(newReview)
    // {
    //     var reviews = this.state.product.reviews;
    //     reviews.push(newReview);
    //     this.setState({ reviews });
    // }

   
    render(){
        return(
            <>
            <div className="mx-5 mb-3 px-3 py-2 bg-light">
            <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Tasty snacks</a></li>
            <li class="breadcrumb-item active" aria-current="page">{this.state.product.name}</li>            
            </ol>
            </nav>   
            </div>
            
            <div className="mx-5 mb-3 px-3 py-2 bg-light clearfix">
            <div class="jumbotron" >
            <div><img src={this.state.product.imageUrl} class="float-start" alt="product pricture"/></div>
            <h1 class="display-4" >{this.state.product.name}</h1>
            <h3><span class="badge bg-primary" >${this.state.product.price}</span></h3>
            <p class="lead">{this.state.product.description}.</p>
            </div>
           
            </div>

            {/* <div>
               <ReviewList reviews={this.state.product.reviews} />
            </div>

            <div>
                <ReviewFrom  onReviewAdded={ newReview => this.addReview(newReview) }/>
            </div> */}

            </>
        )
    }
    componentDidMount() {
        //let id = this.props.match.params.accountId;
        let id =0
        console.log(this)
        if (id) {
            this.productRepository.getProduct(id)
                .then(account => this.setState(account));
        }
    }
}
