import React from 'react'; 

export const ReviewList   = props => (
    <>
    <h3 style={{marginLeft:"3rem", marginRight:"3rem", marginBottom:"1rem"}}>
        Product Reviews ({props.product.map(x=>x.reviews.length)})
    </h3>
    <div>
    {
        props.product.map(x=>x.reviews.length)==0 && <div style={{background:"#EEE", padding:"0.5rem 1rem", marginLeft:"3rem", marginRight:"3rem", marginBottom:"1rem"}}>Be the first to add a review!</div>
    }
    </div>
    </>
       
           
  
);