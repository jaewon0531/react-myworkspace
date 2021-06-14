import { call, put, takeEvery } from "redux-saga/effects";

import api from "../../api/contact";

function* addContact(action) {
  const result = yield call(api.add, action.payload);
  yield put({
    type: "ADD_CONTACT_SUCCEEDED",
    payload: { id: result.data.id, ...action.payload },
  });
}

function* fetchContactList(action) {
  console.log("--sagas: fetch Contactlist --");
  console.log(action);
  try {
    const result = yield call(api.fetch);
    yield put({
      type: "FETCH_CONTACTLIST_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* removeContact(action) {
  try {
    const result = yield call(api.remove, action.payload);
    console.log(result);
    yield put({
      type: "REMOVE_CONTACT_SUCCEEDED",
      payload: action.payload,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* modifyContact(action) {
  console.log("--sagas: modify Todo --");
  console.log(action);

  try {
    const result = yield call(api.modify, action.payload);
    console.log(result);
    yield put({
      type: "MODIFY_CONTACT_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* contactSaga() {
  yield takeEvery("ADD_CONTACT", addContact);
  yield takeEvery("REMOVE_CONTACT", removeContact);
  yield takeEvery("MODIFY_CONTACT", modifyContact);
  yield takeEvery("FETCH_CONTACTLIST", fetchContactList);
}

export default contactSaga;