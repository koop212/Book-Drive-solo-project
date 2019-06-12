import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, TextField } from '@material-ui/core'
import '../LoginPage/LoginPage.css';


const styles = {
    paper: {
      height: '300px',
      width: '300px',
      direction: 'row',
      marginTop: '70px',
      marginLeft: '100px',
      position: 'absolute',
      top: '8%',
      left: '55%',
      transform: 'translate(-50 %, -50 %)',
    }
  }

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
      this.props.history.push('/home');
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  handleClick = (event) => {
    this.setState({
      username: 'koop',
      password: 'qwerty'
    })
  }

  handleLog = (event) => {
    this.setState({
      username: '911car',
      password: 'qwerty'
    })
  }


  render() {
    return (
      <div className={this.props.classes.main}>
        <div>
          <img className="loginImg" src="https://wallpapershome.com/images/wallpapers/jeep-switchback-2560x1440-hd-wallpaper-jeep-wrangler-suv-concept-13333.jpg" />
        </div>
      <Grid container>
        <Paper 
          className={this.props.classes.paper} 
          style={{
          backgroundColor: 'transparent', 
          boxShadow: 'none'
          }}>
          <center>
        
            {this.props.errors.loginMessage && (
              <h2
                className="alert"
                role="alert"
              >
                {this.props.errors.loginMessage}
              </h2>
            )}
            <form onSubmit={this.login}>
              <h1 onClick={this.handleClick}>Login</h1>
              <div>
                  <TextField
                    placeholder="Username"
                    type="text"
                    variant="outlined"
                    margin="dense"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChangeFor('username')}
                  />
              </div>
              <div>
                  <TextField
                    placeholder="Password"
                    className={this.props.classes.input}
                    type="password"
                    variant="outlined"
                    margin="dense"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChangeFor('password')}
                  />
                  <input
                    className="log-in"
                    type="submit"
                    name="submit"
                    value="Log In"
                  />
              </div>
            </form>
            <button
              type="button"
              className="link-button"
              onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
            >
              Register
            </button>
          </center>
        </Paper>
      </Grid>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default withStyles(styles)(connect(mapStateToProps)(LoginPage));
