import { QUESTIONSLIST } from "../actionTypes";
import { stat } from "fs";

const INITIAL_STATE = {
  questions: []
}

export default (state = INITIAL_STATE, action) => {
  console.log(`action: ${action}`)
  switch(action.type){
    case QUESTIONSLIST:
      let { questions } = action.payload;
      return {...state, questions}
    default:
    return state;
  }
}