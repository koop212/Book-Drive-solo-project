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

function* commentSaga() {
    yield takeLatest('FETCH_COMMENTS', fetchComments);
}

export default commentSaga