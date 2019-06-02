import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../CarDetails/CarDetails.css';
import TheCar from '../TheCar/TheCar';

class CarDetails extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_VEHICLE_DETAILS', payload: this.props.match.params.id })
        console.log('in Match route', this.props.match.params.id);
        
    }

    render() {
        console.log('vehicle details:', this.props.reduxState.vehicleDetailsReducer);
        
        return(
            <div>
                {this.props.reduxState.vehicleDetailsReducer.map((car, i) => {
                    return (
                        <div key={i}>
                            <div>
                                <img key={i} className="imageDetails" src={car.image_url} />
                            </div>
                            <TheCar key={i} car={car} />
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