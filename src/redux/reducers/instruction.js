import { INSTRUCTION } from "../actionTypes";

const INITIAL_STATE = {
  logicalQuestions: null,
  quantitativeQuestions:null,
  verbalQuestions: null,
  time: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INSTRUCTION:
      console.log(action);
      return {
        ...state,
        logicalQuestions: action.instruction.logicalQuestions,
        quantitativeQuestions: action.instruction.quantitativeQuestions,
        verbalQuestions: action.instruction.verbalQuestions,
        time: action.instruction.time,
        totalQuestions: action.instruction.totalQuestions,
      };
    default:
      return state;
  }
}