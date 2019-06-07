import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../ActivityPage/Activity.css';
// import VehicleReview from '../VehicleReview/VehicleReview';
import MyOrder from '../MyOrder/MyOrder';
import CarRequested from '../CarRequested/CarRequested';
import { Grid } from '@material-ui/core';



class ActivityPage extends Component {

    

    render() {
        
        
        return(
            <div className="activity">
                {/* <pre>{JSON.stringify(this.props.reduxState.vehicleOwnerReducer)}</pre> */}
                <h2 className="notification">Notifications</h2>
                <Grid container justify='center' direction='row'>
                    <Grid item sm={6}>
                        <MyOrder />
                    </Grid>
                    <Grid item sm={6}>
                        <CarRequested />
                    </Grid>
                </Grid>
                
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