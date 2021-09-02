import { call, put, takeLatest, StrictEffect } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import todoListAPI from 'utils/todoListAPI';
import {
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  CHECK_TASK,
  LOAD_TASKS,
} from '../actions/types';

function* addPostRequest() {
  try {
    const response: AxiosResponse = yield call(todoListAPI.post, '/todo', {
      content: '안녕',
    });
    console.log(response);
    switch (response.status) {
      case 200:
        yield put({
          type: ADD_TASK,
        });
    }
  } catch (err) {
    console.log(err);
  }
}

function* editPostRequest() {
  try {
    const response: AxiosResponse = yield call(todoListAPI.post, `/todo`, {
      content: 'string',
    });

    switch (response.status) {
      case 200:
        yield put({
          type: EDIT_TASK,
        });
    }
  } catch (err) {
    console.log(err);
  }
}

function* removeDeleteRequest() {
  try {
    const response: AxiosResponse = yield call(todoListAPI.post, `/todo`);

    switch (response.status) {
      case 200:
        yield put({
          type: REMOVE_TASK,
        });
    }
  } catch (err) {
    console.log(err);
  }
}

function* checkPostRequest() {
  try {
    const response: AxiosResponse = yield call(todoListAPI.post, `/todo`, {
      isCheck: true,
    });

    switch (response.status) {
      case 200:
        yield put({
          type: CHECK_TASK,
        });
    }
  } catch (err) {
    console.log(err);
  }
}

function* loadGetRequest() {
  try {
    // const response: AxiosResponse = yield call(todoListAPI.get, '/todo');
    // switch (response.status) {
    //   case 200:
    //     const data = {
    //       type: LOAD_TASKS,
    //       payload: response.data.todoList,
    //     };
    //     yield put(data);
    //     console.log(data)
    // }
    const { data } = yield call(todoListAPI.get, 'assets/data/dummyData.json');
    console.log(...data);
    const list = {
      type: LOAD_TASKS,
      payload: data,
    };
    yield put(list);
  } catch (err) {
    console.log(err);
  }
}

export function* taskSaga(): Generator<StrictEffect> {
  // yield takeLatest(ADD_TASK, addPostRequest);
  // yield takeLatest(EDIT_TASK, editPostRequest);
  // yield takeLatest(REMOVE_TASK, removeDeleteRequest);
  // yield takeLatest(CHECK_TASK, checkPostRequest);
  yield takeLatest(LOAD_TASKS, loadGetRequest);
}
