interface Payload {
    readonly error?: object | boolean;
    readonly data?: object | string;
}


export type ACTIONTYPE = | { type: "FETCH_COVID_DATA"; payload: Payload }
| { type: "FETCH_COVID_DATA_SUCCESS"; payload: Payload }
| { type: "FETCH_COVID_DATA_FAILURE"; payload: Payload };