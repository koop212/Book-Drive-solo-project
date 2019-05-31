import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarDetails extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_VEHICLE_DETAILS'})
        console.log(this.props.match);
        
    }

    render() {
        return(
            <p>Details goes here</p>
        )
    }
}

export default connect()(CarDetails);