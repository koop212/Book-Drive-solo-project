import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchComments() {
    try{
        let response = yield axios.get('/api/rate/comments');
        console.log(response);
        yield put({type: 'SET_COMMENTS', payload: response.data})
    }catch(error) {
        console.log('Error in fetchComments', error)
    }
}

function* fetchRates() {
    try{
        let response = yield axios.get('/api/rate');
        console.log('In fetchRates',response);
        yield put({type: 'SET_RATES', payload: response.data});
    }catch(error) {
        console.log('Error in fetchRates', error)
    }
}

function* commentSaga() {
    yield takeLatest('FETCH_COMMENTS', fetchComments);
    yield takeLatest('FETCH_RATES', fetchRates);
}

export default commentSaga