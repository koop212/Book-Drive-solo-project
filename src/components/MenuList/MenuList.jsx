import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';



const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class MenuList extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleList = () => {
        this.setState({ anchorEl: null });
        this.props.history.push('/vehicle')
    };

    handleAccount = () => {
        this.setState({ anchorEl: null });
        this.props.history.push('/account')
    };

    handleActivity = () => {
        this.setState({ anchorEl: null });
        this.props.history.push('/activity')
    };

    handleActivity = () => {
        this.setState({ anchorEl: null });
        this.props.history.push('/activity')
    };

    handleCarForm = () => {
        this.setState({ anchorEl: null });
        this.props.history.push('/vehicleform')
    };

    handleLogOut = () => {
        this.setState({ anchorEl: null });
        this.props.dispatch({ type: 'LOGOUT' });
        this.props.history.push('/')
    };

  render() {
    const { anchorEl } = this.state;
      const { classes } = this.props;
    return (
      <div>
        <IconButton 
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick} 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu">
            <MenuIcon />
        </IconButton> 
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        <MenuItem onClick={this.handleAccount}>My Account</MenuItem>
        <MenuItem onClick={this.handleActivity}>My Activity</MenuItem>
        <MenuItem onClick={this.handleCarForm}>List your car</MenuItem>
        <MenuItem onClick={this.handleList}>Car List</MenuItem>
        <MenuItem onClick={this.handleLogOut}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(connect()(MenuList)));