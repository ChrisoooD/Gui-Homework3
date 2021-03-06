import React from 'react';
import { Rating } from './rating';
import { Button, } from 'react-bootstrap';

export class ReviewFrom extends React.Component {
    ratingValue = [
        '1', '2', '3', '4', '5'
    ];
    state = {
        userName: '',
        rating: '',
        comment: '',
        date: new Date().toDateString()
    };

    onAddClick() {
        this.props.onReviewAdded(this.state);
        this.setState({
            userName: '',
            rating: '',
            comment: '',
        });
    }

    render() {
        return <>
            <div className="container">
                <div className="border broder-secondary">
                    <div class="row bg-secondary text-white">Add Review</div>
                    <div class="row">
                        <div className="col-6">Your name</div>
                        <div className="col"> Rating</div>
                        <div className="col">    </div>
                    </div>
                    <div class="row">
                        <div className="col-6">
                            <input
                                type="text"
                                name="userName"
                                id="userName"
                                className="form-control"
                                value={this.state.userName}
                                onChange={event => this.setState({ userName: event.target.value })} />
                        </div>
                        <div className="col">
                            <select
                                name="ratings"
                                id="ratings"
                                className="form-control"
                                value={this.state.rating}
                                onChange={event => this.setState({ rating: event.target.value })}>
                                <option></option>
                                {
                                    this.ratingValue.map((x, i) => <option key={i}>{x}</option>)
                                }
                            </select>
                        </div>
                        <div className="col">
                            <Rating name="stars"
                                id="stars" value={this.state.rating} />
                        </div>
                    </div>
                    <div class="row"><div className="col"> Comment</div></div>
                    <div class="row">
                        <div class="col">
                            <textarea id="comment" name="comment" rows="6" cols="100"
                                value={this.state.comment}
                                onChange={event => this.setState({ comment: event.target.value })}>
                            </textarea>
                        </div>
                    </div>

                    <div class="row">
                        <div class='mb-3'>
                            <Button variant="primary"
                                onClick={() => this.onAddClick()}>
                                Submit
                            </Button>
                        </div>
                    </div>


                </div>
            </div>
        </>;
    }
}