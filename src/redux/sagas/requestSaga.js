import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchMyOrder() {
    try{
        let response = yield axios.get('/api/order');
        console.log('In fetchMyOrder', response);
        yield put({type: 'SET_MY_ORDER', payload: response.data});
    }catch(error) {
        console.log('Error in fetchMyOrder', error);
    }
}

function* fetchRequestedCar() {
    try {
        let response = yield axios.get('/api/order/request');
        console.log('In fetchRequestedCar', response);
        yield put({ type: 'SET_REQUESTED_CAR', payload: response.data })
    } catch (error) {
        console.log('Error in fetchRequestedCar', error);
    }
}

function* requestSaga() {
    yield takeLatest('FETCH_MY_ORDER', fetchMyOrder);
    yield takeLatest('FETCH_REQUESTED_CAR', fetchRequestedCar);
}

export default requestSaga;