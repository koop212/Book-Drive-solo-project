import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarCard from '../CarCard/CarCard';
import '../CarList/CarList.css';

class CarList extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_VEHICLE'})
        this.props.dispatch({type: 'FETCH_IMAGE'})
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <div className="carList">
                {this.props.reduxState.vehicleReducer.map((car, i) => {
                    //Show list of all cars
                    return <CarCard key={i} car={car}/>
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

export default connect(mapStateToProps)(CarList);