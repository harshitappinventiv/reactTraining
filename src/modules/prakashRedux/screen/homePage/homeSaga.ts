import { put, takeEvery, call } from "redux-saga/effects";
import axios from "axios";
import { getUserData } from "./action";
import { GET_USER_DATA_SAGA } from "../../../../utils/actionTypes";

const getUserDataSaga = async () => {
  const URL = "https://reqres.in/api/users/";
  const res = await axios.get(URL);
  return res?.data?.data;
};

function* getUserDataAsyn(): any {
  const userData = yield call(getUserDataSaga);
  yield put(getUserData(userData));
}

function* watchGetUserDataAsyn() {
  yield takeEvery(GET_USER_DATA_SAGA, getUserDataAsyn);
}

export default watchGetUserDataAsyn;
