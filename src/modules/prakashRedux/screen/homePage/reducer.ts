import { GET_USER_DATA } from "../../../../utils/actionTypes";

type ActionType = { type: typeof GET_USER_DATA; payload: [] };

const initialState = {
  userData: [],
};

export const getUserReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
