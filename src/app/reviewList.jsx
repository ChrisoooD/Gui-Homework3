import React from 'react'; 
import { Rating } from './rating';
import { Card } from 'react-bootstrap';

export const ReviewList   = props => (
    <>
    <h3 style={{marginLeft:"3rem", marginRight:"3rem", marginBottom:"1rem"}}>
        Product Reviews ({props.reviews.length})
    </h3>
    <div>
    {
        !props.reviews.length&& <div style={{background:"#EEE", padding:"0.5rem 1rem", marginLeft:"3rem", marginRight:"3rem", marginBottom:"1rem"}}>Be the first to add a review!</div>
    }
    {
        <div style={{marginLeft:"3rem", marginRight:"3rem", marginBottom:"1rem"}}>
            {props.reviews.map((ProductReview)=>(
                <Card style={{marginBottom:"0.5rem"}}>
                <Card.Header><Rating value={ProductReview.rating}/></Card.Header>
                <Card.Body>
                <Card.Title style={{float:"right"}}>{ProductReview.date}</Card.Title>
                  <Card.Title>{ProductReview.userName}</Card.Title>
                  <Card.Text>
                  {ProductReview.comment}
                  </Card.Text>
                </Card.Body>
              </Card>))}
        </div>
    }
    </div>
    </>
       
           
  
);