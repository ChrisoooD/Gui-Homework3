import React from 'react';
import { Rating } from './rating';
import { Button} from 'react-bootstrap';

export class ReviewFrom extends React.Component {
    ratingValue = [
        '1','2','3','4','5'
    ];
    state = {
        userName: '',
        rating: '',
        comment: ''
    };

    onAddClick() {
        this.props.onReviewAdded(this.state);
        this.setState({
            userName: '',
            rating: '',
            comment: ''
        });   
    }

    render() {
        return <>
        <h3>Add Review</h3>
            <div className="row mt-4 mb-4">
                <div className = "col-6">Your name</div>
                <div className = "col"> Rating</div>
                <div className = "col">    </div>
                    <div className="col-6">
                    
                        <input 
                            type="text"
                            name="userName"
                            id="userName"
                            className="form-control"
                            value={this.state.userName}
                            onChange={ event => this.setState({ userName: event.target.value }) } />
                    </div>

                    <div className="col">
                    
                        <select
                            name="ratings"
                            id="ratings"
                            className="form-control"
                            value={this.state.type}
                            onChange={ event => this.setState({ rating: event.target.value }) }>
                            <option></option>
                            {
                                this.ratingValue.map((x, i) => <option key={ i }>{ x }</option>)
                            }
                        </select>
                    </div>

                    <div className="col">
                        <Rating name="stars"
                        id="stars" value={this.state.rating}/>
                    </div>
                    
                    <div >
                        <Button variant="primary"
                            onClick={ () => this.onAddClick() }>
                            Add
                        </Button>
                    </div>
                </div>

        </>;
    }
}