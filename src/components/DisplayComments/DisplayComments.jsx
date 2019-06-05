import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

const styles = {
    firstName: {
        fontSize: '20px',
    }
}

class DisplayComments extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_COMMENTS'})
    }

    render() {
        let style = this.props.classes;
        return(
            <div>
                {this.props.reduxState.commentReducer.map(comment => {
                    if(this.props.carId == comment.vehicle_id) {
                        return (
                            <div key={comment.id}>
                                <p><span className={style.firstName}>{comment.first_name}:</span> {comment.comment}</p>
                            </div>
                        )
                    }
                    return null;
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

export default withStyles(styles)(connect(mapStateToProps)(DisplayComments));