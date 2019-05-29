import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarList extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_VEHICLE'})
    }

    render() {
        return(
            <div>
                {this.props.reduxState.vehicleReducer.map((car) => {
                    return <p>{car.vehicle}</p>
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

export default connect(mapStateToProps)(CarList);