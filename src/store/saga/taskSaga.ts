import { delay, put, takeLatest } from 'redux-saga/effects';
import {
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  CHECK_TASK,
  LOAD_TASKS,
} from '../actions/types';

export function* taskSaga() {
  yield takeLatest(ADD_TASK, addPostRequest);
  yield takeLatest(EDIT_TASK, editPostRequest);
  yield takeLatest(REMOVE_TASK, removeDeleteRequest);
  yield takeLatest(CHECK_TASK, checkPostRequest);
  yield takeLatest(LOAD_TASKS, loadGetRequest);
}

function* addPostRequest() {
  try {
  } catch (err) {
    console.log(err);
  }
}

function* editPostRequest() {
  try {
  } catch (err) {
    console.log(err);
  }
}

function* removeDeleteRequest() {
  try {
  } catch (err) {
    console.log(err);
  }
}

function* checkPostRequest() {
  try {
  } catch (err) {
    console.log(err);
  }
}

function* loadGetRequest() {
  try {
  } catch (err) {
    console.log(err);
  }
}
