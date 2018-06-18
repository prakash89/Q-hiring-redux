import {QUESTIONS} from '../actionTypes'
import { QUESTIONSLIST } from "../actionTypes";


const INITIAL_STATE = {
  message: '',
  items: {
    logical: [],
    quantitative: [],
    verbal: [],
  },
  questions: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTIONS:
      return {
        ...state,
        items: action.questions,
      };
      case QUESTIONSLIST:
      let questions  = action.payload;
      return { ...state, questions }
    default:
      return state;
  }
}
