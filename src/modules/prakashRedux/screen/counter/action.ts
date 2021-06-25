import { DECREMENT, INCREMENT } from "../../../../utils/actionTypes";

export const increment = (num: number) => {
  return {
    type: INCREMENT,
    payload: num,
  };
};

export const decrement = (num: number) => {
  return {
    type: DECREMENT,
    payload: num,
  };
};

export const incrementAsyn = (num: number) => {
  return (dispatch: Function, getState: Function) => {
    const { counter } = getState().counterReducer;

    if (counter === 0) {
      return;
    }

    setTimeout(() => {
      dispatch(increment(num));
    }, 1000);
  };
};
