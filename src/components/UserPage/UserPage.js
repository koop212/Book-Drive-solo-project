import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../UserPage/UserPage.css';
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from '@material-ui/core/styles'
// import Search from '../Search/Search';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const styles = {
  searchField: {
    backgroundColor: 'white',
    color: 'black',
  },
  input1: {
    // height: '90px'
  }
}

class UserPage extends Component {

  state = {
    city: ''
  }

  handleOnClick = (event) => {
    event.preventDefault();
    this.props.history.push('/vehicle')
  }

  handleClick = (event) => {
    this.setState({
      city: 'Minneapolis, MN'
    })
  }

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <img className="image" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a018-hbmertz-21.jpg?auto=format&bg=F4F4F3&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-1.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1600&s=97108c64a9077bcce2f05949248f3b31" />
            <div className="text"><h2 onClick={this.handleClick}>Where is your next trip?</h2></div>
            <div class="search-container">
              <form className="search">
                <TextField
                  value={this.state.city}
                  style={{
                    backgroundColor: 'white',
                  }}
                  margin="dense"
                  variant="outlined"
                  placeholder="Search Location"
                  // style={{ height: 10 }}
                  className={this.props.classes.searchField}
                  // inputStyle={{ backgroundColor: 'white' }}
                  // containerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 5 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <SearchIcon onClick={this.handleOnClick} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </form>
            </div>
          </div>
        </header>
        <h1 id="welcome">
          Welcome, {this.props.user.first_name}!
      </h1>
      </div>
    )
  }
}




// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(UserPage));
