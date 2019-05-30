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

function* fetchOwnerVehicle(action) {
    try {
        let vehicleOwnerResponse = yield axios.get(`/api/vehicle/owner`);
        console.log('in fetchOwnerVehicle',vehicleOwnerResponse);
        yield put({ type: 'SET_OWNER_VEHICLE', payload: vehicleOwnerResponse.data })
    } catch (error) {
        console.log('Error in fetchOwnerVehicle');
    }
}

function* addVehicle(action) {
    try{
        yield axios.post('/api/vehicle', action.payload);
        yield put ({type: 'FETCH_VEHICLE'})
    }catch(error) {
        console.log('Error in addVehicle', error);
    }
}

function* vehicleSaga() {
    yield takeLatest('FETCH_VEHICLE', fetchVehicle);
    yield takeLatest('ADD_VEHICLE', addVehicle);
    yield takeLatest('FETCH_OWNER_VEHICLE', fetchOwnerVehicle);
}

export default vehicleSaga;