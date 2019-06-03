import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarRequested extends Component {
    render() {
        return(
            <p>show requested car here</p>
        )
    }
}

export default connect()(CarRequested);