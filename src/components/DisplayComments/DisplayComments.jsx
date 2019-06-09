import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    firstName: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    comment: {
        margin: '30px',
        textAlign: 'center'
    }
}

class DisplayComments extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_COMMENTS'})
    }

    render() {
        let style = this.props.classes;
        return(
            <div >
                {this.props.reduxState.commentReducer.map(comment => {
                    if(this.props.carId == comment.vehicle_id) {
                        return (
                            // <div className={this.props.classes.comment}>
                                <p className={this.props.classes.comment} key={comment.id}><span className={style.firstName}>{comment.first_name}:</span> {comment.comment}</p>

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