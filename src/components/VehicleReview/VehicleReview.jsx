import React, { Component } from 'react';
import Rating from 'react-rating';
import { Star, StarBorder } from '@material-ui/icons';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import AddRate from '../AddRate/AddRate';

class VehicleReview extends Component {

    state = {
        rates: 0,
        comment: '',
        reviewed: false
    }

    handleOnChange = (value) => {
        this.setState({
            rates: value
        })
        console.log('In rate page', value)
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            reviewed: !this.state.reviewed
        })
    }

    render() {
        
            if(!this.state.reviewed) {
                return(
                    <div>
                        <h5>Comment and Rate this vehicle</h5>
                        <div>
                            <Rating
                                emptySymbol= {<StarBorder />}
                                fullSymbol={<Star />}
                                initialRating={this.state.rates}
                                start={0}
                                stop={5}
                                onChange={this.handleOnChange}
                            />
                        </div>
                        <div>
                            <TextField
                                label="How was the ride?"
                                multiline
                                rowsMax="4"
                                onChange={this.handleCommentChange}
                                margin="normal"
                            />
                        </div>
                        <div>
                            <AddRate click={this.handleClick} rate={this.state.rates} comment={this.state.comment} carRating={this.props.carRate} />
                        </div>
                    </div>
                ) 
            }
            return null;
            
        
    }
}

export default connect()(VehicleReview);