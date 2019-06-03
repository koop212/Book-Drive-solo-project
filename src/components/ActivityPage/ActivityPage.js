import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../ActivityPage/Activity.css';
import VehicleReview from '../VehicleReview/VehicleReview';
import MyOrder from '../MyOrder/MyOrder';


class ActivityPage extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_OWNER_VEHICLE'})
    }


    // Delete vehicle belonging to logged in user
    deleteVehicle = (carId) => {
        console.log('deleteVehicle function', carId);
        this.props.dispatch({type: 'DELETE_VEHICLE', payload: {id:carId}});
    }

    render() {
        
        
        return(
            <div className="activity">
                {/* <pre>{JSON.stringify(this.props.reduxState.vehicleOwnerReducer)}</pre> */}
                <h2 className="notification">Notifications</h2>
                <div>
                    <VehicleReview />
                </div>
                <div>
                    <MyOrder />
                </div>
                <ul>
                    {this.props.reduxState.vehicleOwnerReducer.map((car, i) => {
                        return (<li key={i}>{car.make} {car.model} <button onClick={() => this.deleteVehicle(car.id)}>Remove</button></li>)
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