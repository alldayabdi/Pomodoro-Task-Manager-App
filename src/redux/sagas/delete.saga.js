import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* deleteTask(action) {
    const id = action.payload;
    console.log('id', id);
    
    yield axios.delete(`/api/tasks/${id}`);
    yield put({type: 'FETCH_TASKS'});
}

function* deleteTaskSaga() {
    yield takeEvery('DELETE_TASK', deleteTask);
}

export default deleteTaskSaga;