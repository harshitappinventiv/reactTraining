import { INCREMENT, DECREMENT } from "../../../../utils/actionTypes";

const initailState = {
  counter: 0,
};

type ActionType =
  | { type: typeof INCREMENT; payload: number }
  | { type: typeof DECREMENT; payload: number };

export const counterReducer = (state = initailState, action: ActionType) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return state;
  }
};
