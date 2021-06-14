import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";

import api from "../../api/todo";

function* addTodo(action) {
  console.log("--sagas: add Todo --");
  console.log(action);

  try {
    const result = yield call(api.add, action.payload);
    console.log(result);

    const { size } = yield select((state) => state.todo);
    const resultFetched = yield call(api.fetchPaging, 0, size);
    console.log(resultFetched);

    yield put({
      type: "FETCH_TODOLIST_PAGING_SUCCEEDED",
      payload: resultFetched.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* fetchTodoListPaging(action) {
  console.log("--sagas: fetch Todolist Paging --");
  console.log(action);

  try {
    const { page, size } = yield select((state) => state.todo);

    const result = yield call(
      api.fetchPaging,
      action.payload ? action.payload.page : page,
      action.payload ? action.payload.size : size
    );
    console.log(result);
    yield put({
      type: "FETCH_TODOLIST_PAGING_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* removeTodo(action) {
  console.log("--sagas: remove Todo --");
  console.log(action);

  try {
    const result = yield call(api.remove, action.payload);
    console.log(result);

    const { page, size } = yield select((state) => state.todo);
    const resultFetched = yield call(api.fetchPaging, page, size);
    console.log(resultFetched);

    yield put({
      type: "FETCH_TODOLIST_PAGING_SUCCEEDED",
      payload: resultFetched.data,
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

function* searchTodo(action) {
  console.log("--sagas: search Todo --");
  console.log(action);

  try {
    const { page, size, keyword } = yield select((state) => state.todo);

    const result = yield call(
      api.search,
      action.payload ? action.payload.page : page,
      action.payload ? action.payload.size : size,
      action.payload ? action.payload.keyword : keyword
    );
    console.log(result);
    yield put({
      type: "SEARCH_TODOLIST_SUCCEEDED",
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
  yield takeLatest("FETCH_TODOLIST_PAGING", fetchTodoListPaging);
  yield takeEvery("SEARCH_TODOLIST", searchTodo);
}

export default todoSaga;