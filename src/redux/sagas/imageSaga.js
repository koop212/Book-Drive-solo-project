import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchImage() {
    try {
        let imageResponse = yield axios.get('/api/image');
        console.log(imageResponse);
        yield put({ type: 'SET_IMAGE', payload: imageResponse.data })
    } catch (error) {
        console.log('Error in fetchImage');
    }
}

function* imageSaga() {
    yield takeLatest('FETCH_IMAGE', fetchImage);
}

export default imageSaga;