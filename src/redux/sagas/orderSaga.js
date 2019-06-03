import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addOrder(action) {
    try{
        console.log('In addOrderSaga', action.payload);
        yield axios.post('/api/order', action.payload);
    }catch(error) {
        console.log('Error in addOrder', error);
    }
}

function* updateStatus(action) {
    try{
        console.log('In updateStatus Saga', action.payload)
        yield axios.put(`/api/order/${action.payload.id}`, action.payload)
    }catch(error) {
        console.log('Error in updateStatus saga', error);   
    }
}

function* orderSaga() {
    yield takeLatest('ADD_ORDER', addOrder);
    yield takeLatest('UPDATE_STATUS', updateStatus);
}






export default orderSaga;