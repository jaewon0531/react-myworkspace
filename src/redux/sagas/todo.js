import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import api from "../../api/todo";

function* addTodo(action) {
  const result = yield call(api.add, action.payload);
  yield put({
    type: "ADD_TODO_SUCCEEDED",
    payload: { id: result.data.id, ...action.payload },
  });
}

function* fetchTodoList(action) {
  console.log("--sagas: fetch Todolist --");
  console.log(action);
  try {
    const result = yield call(api.fetch);
    yield put({
      type: "FETCH_TODOLIST_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* removeTodo(action) {
  try {
    const result = yield call(api.remove, action.payload);
    console.log(result);
    yield put({
      type: "REMOVE_TODO_SUCCEEDED",
      payload: action.payload,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* modifyTodo(action) {
  console.log("--sagas: modify Todo --");
  console.log(action);

  try {
    const result = yield call(api.modify, action.payload);
    console.log(result);
    yield put({
      type: "MODIFY_TODO_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* todoSaga() {
  yield takeEvery("ADD_TODO", addTodo);
  yield takeEvery("REMOVE_TODO", removeTodo);
  yield takeEvery("MODIFY_TODO", modifyTodo);
  yield takeLatest("FETCH_TODOLIST", fetchTodoList);
}

export default todoSaga;