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



function* orderSaga() {
    yield takeLatest('ADD_ORDER', addOrder);
}






export default orderSaga;