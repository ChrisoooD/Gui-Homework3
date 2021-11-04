import React from 'react';
import { Product } from '../models/product';
import { Rating } from './rating';
import { ReviewFrom } from './reviewForm';
import { ReviewList } from './reviewList';



export class ProductDetails extends React.Component {
   product =[
     new Product(
        1,
        "Jif Peanut Butter, 40 ounce",
        "7g of Protein per serving with no preservatives, artifical flavors or colors.",
        7.99,
        "https://johnlawrimore.com/smu/101.png",
        []
    )
   ]

   
    render(){
        return(
            <>
            <div style={{background:"#EEE", padding:"0.5rem 1rem", marginLeft:"3rem", marginRight:"3rem", marginBottom:"1rem"}}>
                <NavBar product={this.product}/>
            </div>
            
            <div style={{background:"#EEE", padding:"0.5rem 1rem", marginLeft:"3rem", marginRight:"3rem", marginBottom:"1rem"}}>
               <ProductDesc product={this.product}/>
            </div>
            
            <div>
               <ReviewList product={this.product} />
            </div>
            
            <div>
                <ReviewFrom />
            </div>

            <div>
                <Rating value={0}/>
            </div>
            </>
        )
    }
    
}
export const NavBar = (props) => (
    <>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Tasty snacks</a></li>
        <li class="breadcrumb-item active" aria-current="page">{ props.product.map(x => x.name)}</li>            </ol>
    </nav>   
                
    </>
  );


export const ProductDesc = (props) => (
    <>
    <div class="jumbotron" >
    <div><img src={props.product.map(x=>x.imageUrl)} style={{float:"left"}}/></div>
    <h1 class="display-4" >{props.product.map(x=>x.name)}</h1>
    <h3><span class="badge bg-primary" >${props.product.map(x=>x.price)}</span></h3>
    <p class="lead">{props.product.map(x=>x.description)}.</p>
    
    </div>
    <div style={{clear:"both"}}/>
    </>
  );
