import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, InputProps, TextField} from '@material-ui/core';

const styles = theme => ({
  root: {
    justifyContent: 'center',
    direction: 'column'
  },
  multilineColor: {
    color: 'black',
    height: '10px',
  },
  paper: {
    width: '400px',
    height: '500px',
    textAlign: 'center',
    float: 'left',
    marginTop: '70px',
  },
  input: {
    width: '230px',
    justifyContent: 'center',
  }
})

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password && this.state.first_name && this.state.last_name && this.state.email) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
        },
      });
      this.props.history.push('/home')
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <Grid container className={this.props.classes.root}>
        <Paper className={this.props.classes.paper}>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
              <TextField
                label="Username"
                className={this.props.classes.input}
                InputProps={{classes:{input: this.props.classes.multilineColor}}}
                type="text"
                variant="outlined"
                margin="dense"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
          </div>
          <div>
            {/* <label htmlFor="password">
              Password:
              <input
                  className={this.props.classes.input}
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label> */}
              <TextField
                label="Password"
                className={this.props.classes.input}
                InputProps={{ classes: { input: this.props.classes.multilineColor } }}
                type="text"
                variant="outlined"
                margin="dense"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
          </div>
          <div>
            {/* <label htmlFor="first_name">
              First Name:
              <input
                type="text"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleInputChangeFor('first_name')}
              />
            </label> */}
              <TextField
                label="First Name"
                className={this.props.classes.input}
                InputProps={{ classes: { input: this.props.classes.multilineColor } }}
                type="text"
                variant="outlined"
                margin="dense"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleInputChangeFor('first_name')}
              />
          </div>
          <div>
            {/* <label htmlFor="last_name">
              Last Name:
              <input
                type="text"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleInputChangeFor('last_name')}
              />
            </label> */}
              <TextField
                label="Last Name"
                className={this.props.classes.input}
                InputProps={{ classes: { input: this.props.classes.multilineColor } }}
                type="text"
                variant="outlined"
                margin="dense"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleInputChangeFor('last_name')}
              />
           </div>
           <div> 
            {/* <label htmlFor="email">
              Email:
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>  */}
              <TextField
                label="Email"
                className={this.props.classes.input}
                InputProps={{ classes: { input: this.props.classes.multilineColor } }}
                type="text"
                variant="outlined"
                margin="dense"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
        </Paper>
      </Grid>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default withStyles(styles)(connect(mapStateToProps)(RegisterPage));

