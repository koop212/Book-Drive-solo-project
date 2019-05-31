import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../ActivityPage/Activity.css';
import VehicleReview from '../VehicleReview/VehicleReview';
import UserReview from '../UserReview/UserReview';


class ActivityPage extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_OWNER_VEHICLE'})
    }

    deleteVehicle = (carId) => {
        console.log('deleteVehicle function', carId);
        this.props.dispatch({type: 'DELETE_VEHICLE', payload: carId});
        // this.props.dispatch({type: 'FETCH_VEHICLE'})
    }

    render() {
        return(
            <div className="activity">
                <h2 className="notification">Notifications</h2>
                <div>
                    <VehicleReview />
                    <UserReview />
                </div>
                <ul>
                    {this.props.reduxState.vehicleOwnerReducer.map((car, i) => {
                        return (<li key={i}>{car.make} {car.model} <button onClick={() => this.deleteVehicle(car.carId)}>Remove</button></li>)
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(ActivityPage);