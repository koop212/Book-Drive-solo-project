import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    gear: {
        fontSize: '18px',
    }
}

class Transmission extends Component {
    render() {
        let gear = '';
        if(this.props.gearType.automatic) {
            gear = ' Automatic ';
        }
        if(this.props.gearType.manual) {
            gear = ' Manual ';
        }
        return(
            <div>
                <h4>Transmission: <br /><span className={this.props.classes.gear}>{gear}</span></h4>
            </div>
        )
    }
}

export default withStyles(styles)(connect()(Transmission));