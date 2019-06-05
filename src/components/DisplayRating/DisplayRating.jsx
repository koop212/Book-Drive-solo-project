import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Star, StarBorder} from '@material-ui/icons';
import Rating from 'react-rating';

class DisplayRating extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_RATES'})
    }

    render() {
        return(
            <div>
                {this.props.reduxState.ratesReducer.map(rates => {
                     if(this.props.carId == rates.vehicle_id) {
                         return <Rating 
                             emptySymbol={<StarBorder />}
                             fullSymbol={<Star />}
                             initialRating={rates.avg}
                             readonly
                         />
                     }
                })}
            </div>
        ) 
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(DisplayRating);