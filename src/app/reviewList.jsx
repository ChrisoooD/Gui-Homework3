import React from 'react'; 
import { Rating } from './rating';
import { Card } from 'react-bootstrap';

export const ReviewList   = props => (
    <>
    <h3 className="mx-5 mb-3">
        Product Reviews ({props.reviews.length})
    </h3>
    <div>
    {
        !props.reviews.length&& <div className="bg-light mx-5 mb-3">Be the first to add a review!</div>
    }
    {
        <div class="mx-5 mb-3">
            {props.reviews.map((ProductReview)=>(
                <Card class="mb-3">
                <Card.Header><Rating value={ProductReview.rating}/></Card.Header>
                <Card.Body>
                <Card.Title class="float-end">{ProductReview.date}</Card.Title>
                <Card.Title >{ProductReview.userName}</Card.Title>
                  
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