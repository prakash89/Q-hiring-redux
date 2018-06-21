import {
	QUESTIONS,
	SHOWVERBAL,
	SHOWLOGICAL,
  SHOWQUANTITATIVE,
  QUESTIONSLIST,
  LOGOUT,
} from '../actionTypes'


const INITIAL_STATE = {
  message: '',
  items: {
    logical: [],
    quantitative: [],
    verbal: []
  },
  questions: [],
  showVerbal: true,
	showLogical: false,
  showQuantitative: false,
  resultId: null,
  questionsList: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTIONS:
      return {
        ...state,
        items: action.questions,
      };
    case QUESTIONSLIST:
      return {
        ...state,
        questionsList: action.payload,
      };
    case SHOWLOGICAL:
      return {
        ...state,
        showVerbal: false,
        showLogical: true,
        resultId: action.resultId,
      };
    case SHOWQUANTITATIVE:
      return {
        ...state,
        showLogical: false,
	      showQuantitative: true,
      };
    case SHOWVERBAL:
      return {
        ...state,
        showVerbal: true,
	      showQuantitative: false,
    };
    case LOGOUT:
     return initState;
    default:
      return state;
  }
}
