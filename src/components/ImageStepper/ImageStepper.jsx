import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { connect } from 'react-redux';


const styles = theme => ({
    root: {
        maxWidth: '100%',
        flexGrow: '1',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 450,
        maxWidth: '100%',
        overflow: 'hidden',
        display: 'block',
        width: '100%',
        objectFit: 'cover',
        transition: 'all 2s ease-in-out',

    },
});

class ImageStepper extends Component {

    state = {
        activeStep: 0,
    }


    handleNext = (event) => {
        event.preventDefault();
        if(this.state.activeStep === this.props.carPic.length - 1) {
            this.setState({
                activeStep: this.state.activeStep
            })
        } else {
            this.setState({
                activeStep: this.state.activeStep + 1,
            })
        }
    }

    handleBack = (event) => {
        event.preventDefault();
        if(this.state.activeStep === 0) {
            this.setState({
                activeStep: this.props.carPic.length - 1
            })
        } else {
            this.setState({
                activeStep: this.state.activeStep - 1,
            })    
        }
        
    }

    render() {
        let classes = this.props.classes;
        console.log('in imagestepper', this.props.carPic)
        return (
            <div className={classes.root}>
                <div>
                    <img
                        className={classes.img}
                        src={this.props.carPic[this.state.activeStep]}
                        // src={this.props.carPic}
                        alt={this.props.car.model}
                    />
                </div>
                
                <MobileStepper
                    steps={this.props.carPic.length}
                    position="static"
                    variant="text"
                    activeStep={this.state.activeStep}
                    nextButton={
                        <Button size="small" onClick={this.handleNext} >
                            Next
                {this.props.theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                            {this.props.theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                />
            </div>
        );
    }
}
const styledImageStepper = withStyles(styles, {withTheme : true})(ImageStepper)

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default (connect(mapStateToProps)(styledImageStepper));