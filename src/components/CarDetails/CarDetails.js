import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarDetails extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_VEHICLE_DETAILS', payload: this.props.match.params.id })
        console.log('in Match route', this.props.match.params.id);
        
    }

    render() {
        console.log('vehicle details:', this.props.reduxState.vehicleDetailsReducer);
        
        return(
            <p>Details goes here</p>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(CarDetails);