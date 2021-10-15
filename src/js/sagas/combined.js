import { all, fork } from "redux-saga/effects";
import dashboardSaga from "./dashboard";

export default function* rootSaga() {
	yield all([fork(dashboardSaga)]);
}
