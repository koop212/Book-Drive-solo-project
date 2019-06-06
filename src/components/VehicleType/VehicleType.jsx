import React, { Component } from 'react';
import { connect } from 'react-redux';

class VehicleType extends Component {
    render() {
        let carType = '';
        if (this.props.carType.gas) {
            carType += ' Gas '
        }
        if (this.props.carType.electric) {
            carType += ' Electric '
        }
        if (this.props.carType.hybrid) {
            carType += ' Hybrid '
        }
        return(
            <div>
                <h4>Vehicle Type:</h4>
                <h5>{carType}</h5>
            </div>
        )
    }
}

export default connect()(VehicleType);