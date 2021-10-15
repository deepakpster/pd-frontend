import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchCovidStats } from "../api";

import {
	fetchCovidDataSuccess,
	fetchCovidDataFailure,
} from "../actions/dashboardActions.js";

function* fetchCovidDataSaga() {
	try {
		const data = yield call(fetchCovidStats);
		yield put(fetchCovidDataSuccess(data));
	} catch (error) {
		yield put(fetchCovidDataFailure(error));
	}
}

export default function* dashboardRootSaga() {
	yield all([takeLatest("FETCH_COVID_DATA", fetchCovidDataSaga)]);
}
