import { START_TIMER, PAUSE_TIMER, RESET_TIMER, INCREASE_ELAPSED_TIME } from '../actions/actions';

const initialState = {
  isRunning: false,
  elapsedTime: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        isRunning: true,
      };
    case PAUSE_TIMER:
      return {
        ...state,
        isRunning: false,
      };
    case RESET_TIMER:
      return {
        ...state,
        elapsedTime: 0,
      };
    case INCREASE_ELAPSED_TIME:
      return {
        ...state,
        elapsedTime: state.elapsedTime + 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
