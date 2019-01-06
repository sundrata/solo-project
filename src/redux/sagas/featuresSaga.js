import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_FEATURES" actions
function* fetchFeatures() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' }, // ensures that app is looking for JSON
            withCredentials: true,
        };

        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return shelf information
        // from the server session (req.user)
        
        const response = yield axios.get('api/features', config);
        // the session has given us a shelf object
        // with an id, url, and description set the client-side shelf object
        yield put({ type: 'SET_FEATURES', payload: response.data });
        console.log(response.data);
        
    } catch (error) {
        console.log('Shelf get request failed', error);
    }
}

function* featuresSaga() {
    yield takeEvery('FETCH_FEATURES', fetchFeatures);

}

export default featuresSaga;