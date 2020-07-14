import { all } from "redux-saga/effects";
import employees from "./employees/saga";

export default function* rootSaga() {
  return yield all([employees]);
}
