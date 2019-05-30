import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../ActivityPage/Activity.css';
import VehicleReview from '../VehicleReview/VehicleReview';
import UserReview from '../UserReview/UserReview';


class ActivityPage extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_OWNER_VEHICLE'})
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
                        return <li>{car.make} {car.model}</li>
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