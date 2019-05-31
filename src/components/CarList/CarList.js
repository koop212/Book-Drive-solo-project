import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarCard from '../CarCard/CarCard';

class CarList extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_VEHICLE'})
        this.props.dispatch({type: 'FETCH_IMAGE'})
    }

    render() {
        return(
            <div>
                <div>
                    {this.props.reduxState.vehicleReducer.map((car, i) => {
                        //Show list of all cars
                        return <CarCard key={i} car={car}/>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(CarList);