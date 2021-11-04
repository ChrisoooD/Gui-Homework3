import React from 'react';
import { Product } from '../models/product';
import { ReviewFrom } from './reviewForm';
import { ReviewList } from './reviewList';



export class ProductDetails extends React.Component {
    state = {
     product:new Product(
        1,
        "Jif Peanut Butter, 40 ounce",
        "7g of Protein per serving with no preservatives, artifical flavors or colors.",
        7.99,
        "https://johnlawrimore.com/smu/101.png",
        []
    )
     }

    addReview(newReview)
    {
        var reviews = this.state.product.reviews;
        reviews.push(newReview);
        this.setState({ reviews });
    }

   
    render(){
        return(
            <>
            <div style={{background:"#EEE", padding:"0.5rem 1rem", marginLeft:"3rem", marginRight:"3rem", marginBottom:"1rem"}}>
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Tasty snacks</a></li>
            <li class="breadcrumb-item active" aria-current="page">{this.state.product.name}</li>            
            </ol>
            </nav>   
            </div>
            
            <div style={{background:"#EEE", padding:"0.5rem 1rem", marginLeft:"3rem", marginRight:"3rem", marginBottom:"1rem"}}>
            <div class="jumbotron" >
            <div><img src={this.state.product.imageUrl} style={{float:"left"}}/></div>
            <h1 class="display-4" >{this.state.product.name}</h1>
            <h3><span class="badge bg-primary" >${this.state.product.price}</span></h3>
            <p class="lead">{this.state.product.description}.</p>
            </div>
            <div style={{clear:"both"}}/>
            </div>
            
            <div >
               <ReviewList reviews={this.state.product.reviews} />
            </div>

            <div>
                <ReviewFrom  onReviewAdded={ newReview => this.addReview(newReview) }/>
            </div>

            </>
        )
    }
    
}
export const NavBar = (props) => (
    <>
   
                
    </>
  );


export const ProductDesc = (props) => (
    <>
    
    </>
  );
