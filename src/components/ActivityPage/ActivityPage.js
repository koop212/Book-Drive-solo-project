import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../ActivityPage/Activity.css';
import VehicleReview from '../VehicleReview/VehicleReview';


class ActivityPage extends Component {
    render() {
        return(
            <div className="activity">
                <h2 className="notification">Notifications</h2>
                <div><VehicleReview/></div>
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