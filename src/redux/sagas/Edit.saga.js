import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* editTask(action) {
console.log(action.payload.id);

    try{
        console.log(action.payload.id);
        yield axios.put(`/api/tasks/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_TASKS'}) //
    }catch (error){
        console.log('Error editing tasks', error);
    }
}

function* editTaskSaga() {
    yield takeEvery('EDIT_TASK', editTask);
}

export default editTaskSaga;