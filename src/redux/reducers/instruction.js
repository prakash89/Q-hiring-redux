import { INSTRUCTION } from "../actionTypes";

const INITIAL_STATE = {
  message: '',
  items: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INSTRUCTION:
      return {
        ...state,
        items: action.instruction,
      };
    default:
      return state;
  }
}