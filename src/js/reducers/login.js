const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
  errorCode: null,
  errorMessage: null
}

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    case 'LOGOUT_REQUEST':
      return {
        ...initialState,
        loading: true,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        loggedIn: true,
        user: action.payload.user,
      }
    case 'LOGIN_FAILURE':
      console.log('action::', action)
      return {
        ...initialState,
        errorCode: action.payload.error.code,
        errorMessage: action.payload.error.message
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...initialState,
        loggedIn: true,
        user: action.payload.user,
      }
    case 'SIGNUP_FAILURE':
      return {
        ...initialState,
        errorCode: action.payload.error.code,
        errorMessage: action.payload.error.message
      }
    case 'LOGOUT_SUCCESS':
      return initialState
    case 'LOGOUT_FAILURE':
      return {
        ...initialState,
        loading: false,
        errorCode: action.payload.error.code,
        errorMessage: action.payload.error.message
      }
    default:
      return state
  }
}