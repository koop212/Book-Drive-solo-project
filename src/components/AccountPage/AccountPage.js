import React, { Component } from 'react';
import { connect } from 'react-redux';


class AccountPage extends Component {

    state = {
        email: '',
    }

    handleChange = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'UPDATE_EMAIL', payload: {email: this.state.email, id: this.props.reduxState.user.id}})
        console.log('In handleSubmit');
    }




    render() {
        return(
            <div>
                <label>Email</label>
                <input placeholder="Update Email" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Update</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(AccountPage);