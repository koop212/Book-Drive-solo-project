import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchVehicle() {
    try{
        let vehicleResponse = yield axios.get('/api/vehicle');
        console.log(vehicleResponse);
        yield put ({type: 'SET_VEHICLE', payload: vehicleResponse.data})
    }catch(error) {
        console.log('Error in fetchVehicle');
    }
}

function* vehicleSaga() {
    yield takeLatest('FETCH_VEHICLE', fetchVehicle);
}

export default vehicleSaga;