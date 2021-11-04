import React from 'react';
import { Product } from '../models/product';



export class ProductDetails extends React.Component {
   Product =[
    new Product (
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
            <div style={{background:"#EEE", padding:"0.5rem 1rem", marginLeft:"1rem", marginRight:"1rem", marginBottom:"1rem"}}>
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Tasty snacks</a></li>
                <li class="breadcrumb-item active" aria-current="page">Jif Peanut Butter, 40 ounce</li>
                </ol>
                </nav>
            </div>
            <div>shit</div>
            </>
        )
    }
    
}
