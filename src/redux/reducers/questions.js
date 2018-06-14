import { QUESTIONSLIST } from "../actionTypes";

const INITIAL_STATE = {
  questions: []
}

export default (state = INITIAL_STATE, action) => {
  debugger
  console.log(`inside reducer action: ${action}`)
  switch(action.type){
    case QUESTIONSLIST:
      let questions  = action.payload;
      return { ...state, questions }
    default:
      return state;
  }
}