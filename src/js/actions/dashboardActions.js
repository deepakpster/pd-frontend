import { action } from "../utils/actionCreator";
import * as actions from "../constants/index";

export const fetchCovidData = () => action(actions.FETCH_COVID_DATA);
export const fetchCovidDataSuccess = (data) =>
	action(actions.FETCH_COVID_DATA_SUCCESS, { data });
export const fetchCovidDataFailure = (error) =>
	action(actions.FETCH_COVID_DATA_FAILURE, { error });
