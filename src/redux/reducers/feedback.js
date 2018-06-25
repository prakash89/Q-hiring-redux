import { FEEDBACK, LOGOUT, LOGOUTMESSAGE } from '../actionTypes'

const INITIAL_STATE = {
  message: '',
  logoutMessage: '',
  logout: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FEEDBACK:
      let { message } = action.payload;
      return { ...state, message };
    case LOGOUTMESSAGE:
      return {
        ...state,
        logoutMessage: action.logoutMessage,
        logout: true,
      };
    case LOGOUT:
      return initState;
    default:
      return state;
  }
}
