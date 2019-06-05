import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { connect } from 'react-redux';

// const tutorialSteps = [
//     // {
//     //     imagePath: this.props.carPic
//     // }
//     {
//         label: 'San Francisco – Oakland Bay Bridge, United States',
//         imgPath:
//             'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//     },
//     {
//         label: 'Bird',
//         imgPath:
//             'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//     },
//     {
//         label: 'Bali, Indonesia',
//         imgPath:
//             'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
//     },
//     {
//         label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
//         imgPath:
//             'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
//     },
//     {
//         label: 'Goč, Serbia',
//         imgPath:
//             'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//     },
// ];

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
        height: 355,
        maxWidth: '100%',
        overflow: 'hidden',
        display: 'block',
        width: '100%',
        objectFit: 'cover',
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
                        <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === this.state.activeStep - 1}>
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