import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarInfo extends Component {
    render() {
        return(
            <p>Car info goes here</p>
        )
    }
}

export default connect()(CarInfo);