import * as Effects from "redux-saga/effects";
import { fetchCovidStats } from "../api";

const call: any = Effects.call;
const all: any = Effects.all;
const put: any = Effects.put;
const takeLatest: any = Effects.takeLatest;

import {
	fetchCovidDataSuccess,
	fetchCovidDataFailure,
} from "../actions/dashboardActions";

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
