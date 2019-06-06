import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <h4>Transmission:</h4>
                <h5>{gear}</h5>
            </div>
        )
    }
}

export default connect()(Transmission);