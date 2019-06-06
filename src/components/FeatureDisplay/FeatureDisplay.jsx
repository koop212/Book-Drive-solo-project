import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import VehicleType from '../VehicleType/VehicleType';
import Transmission from '../Transmission/Transmission.jsx';

const styles = {
    features: {
        flexDirection: 'column'
    }
}


class FeatureDisplay extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_FEATURES'})
    }


    render() {
        console.log('in featuredisplay', this.props.reduxState.featureReducer)
        return(
            <div>
                {this.props.reduxState.featureReducer.map(feature => {
                    if(this.props.carId == feature.vehicle_id ) {
                        // console.log('map feature', feature)
                        let features = '';
                        if (feature.all_wheel_drive){
                            features += ' AWD ';
                        } 
                        if (feature.pet_friendly) {
                            features += ' Pet Friendly ';
                        }
                        if (feature.heated_seats) {
                            features += ' Heated Seats ';
                        }
                        if (feature.convertible) {
                            features += ' Convertible ';
                        }
                        if (feature.sunroof) {
                            features += ' Sunroof ';
                        }
                        return (
                            <div>
                                <div className={this.props.classes.features}>
                                    <h4>Features:</h4>
                                    <h5>{features}</h5>
                                </div>
                                <div>
                                    <VehicleType carType={feature} />
                                </div>
                                <div>
                                    <Transmission gearType={feature} />
                                </div>
                            </div>
                        )
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

export default withStyles(styles)(connect(mapStateToProps)(FeatureDisplay));