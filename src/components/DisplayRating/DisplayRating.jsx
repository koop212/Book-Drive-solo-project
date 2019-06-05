import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayRating extends Component {
    render() {
        return(
            <p>Show ratings here</p>
        )
    }
}

export default connect()(DisplayRating);