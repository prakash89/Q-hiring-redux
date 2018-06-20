import { 
	QUESTIONS,
	SHOWVERBAL,
	SHOWLOGICAL,
  SHOWQUANTITATIVE,
  QUESTIONSLIST,
} from '../actionTypes'


const INITIAL_STATE = {
  message: '',
  items: {
    logical: [],
    quantitative: [],
    verbal: [],
  },
  questions: [],
  showVerbal: true,
	showLogical: false,
	showQuantitative: false,
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
      return { 
        ...state, 
        questions 
      };
    case SHOWLOGICAL:
      return { 
        ...state, 
        showVerbal: false,
	      showLogical: true,
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
    default:
      return state;
  }
}
