import React, { Component } from 'react';
import Rating from 'react-rating';
import { Star, StarBorder } from '@material-ui/icons'

class VehicleReview extends Component {
    render() {
        return(
            <Rating
                emptySymbol= {<StarBorder />}
                fullSymbol={<Star />}
                initialRating={0}
            />
        )
    }
}

export default VehicleReview;