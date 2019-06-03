import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';


class CarRequested extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_REQUESTED_CAR' });
    }

    render() {
        return(
            <div>
                <h2>Requests to book your vehicle</h2>
                {this.props.reduxState.requestedCarReducer.map(request => {
                    return (
                        <div>
                            <p>{request.username} would like to book your <br/> 
                            {request.make} {request.model} for ${request.price} per day <br/> 
                            on <Moment format='MM/DD/YYYY'>{request.start_date}</Moment> to <Moment format='MM/DD/YYYY'>{request.end_date}</Moment></p>
                            <button>Approve</button>
                            <button>Decline</button>
                        </div>
                    )
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


export default connect(mapStateToProps)(CarRequested);