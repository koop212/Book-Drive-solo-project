import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../CarDetails/CarDetails.css';
import TheCar from '../TheCar/TheCar';
import ImageStepper from '../ImageStepper/ImageStepper';

class CarDetails extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_VEHICLE_DETAILS', payload: this.props.match.params.id })
        console.log('in Match route', this.props.match.params.id);
        window.scrollTo(0, 0)
    }

    render() {
        console.log('vehicle details:', this.props.reduxState.vehicleDetailsReducer);
        
        return(
            <div>
                {this.props.reduxState.vehicleDetailsReducer.map((car, i) => {
                    return (
                        <div key={i}>
                            {console.log('in Cardetails', car.images)}
                            <div>
                                <ImageStepper carPic={car.images} car={car}/>
                            </div>
                            <TheCar key={i} car={car} carId={this.props.match.params.id}/>
                        </div>
                    )
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

export default connect(mapStateToProps)(CarDetails);