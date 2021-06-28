export const initialState: any = {
  userData: [],
};

const reducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA": {
      return {
        ...state,
        userData: payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
