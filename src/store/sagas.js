import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionType";
import { initTodoItemAction } from "./actionCreator";
import axios from "axios";

function* getInitList() {
  const res = yield axios.get("/list.json");
  const action = initTodoItemAction(res.data);
  yield put(action);
}

//generator函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
