import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayComments extends Component {
    render() {
        return(
            <p>Show comments here</p>
        )
    }
}

export default connect()(DisplayComments);