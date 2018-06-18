import { QUESTIONSLIST } from "../actionTypes";

const INITIAL_STATE = {
  questions: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case QUESTIONSLIST:
      let questions  = action.payload;
      return { ...state, questions }
    default:
      return state;
  }
}