const initialState = {
    loading: false,
    statistics:[],
    error:null
}
  
export default function dashboardReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'FETCH_COVID_DATA':
            return {...initialState, loading: true}
        case 'FETCH_COVID_DATA_SUCCESS':
            return {...initialState, statistics: action.payload.data}
        case 'FETCH_COVID_DATA_FAILURE':
            return {...initialState, error: action.payload.error}
        default:
            return state
    }
}
