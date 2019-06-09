import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    type: {
        fontSize: '18px',
    }
}

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
                <h4>Vehicle Type: <br/><span className={this.props.classes.type}>{carType}</span></h4>
            </div>
        )
    }
}

export default withStyles(styles)(connect()(VehicleType));