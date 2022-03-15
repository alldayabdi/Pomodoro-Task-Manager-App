import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { takeEvery} from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_TASK"
function* setTask(action) {
try { 
    console.log('in saga, task sent is', action.payload);
    yield axios.post(`/api/tasks`, action.payload);
    yield put({ type: 'FETCH_TASKS' })

} catch (err) {
    console.log('POST error is', err);
}}

function* addTask() {
    yield takeEvery('ADD_TASK', setTask);
}

export default addTask;