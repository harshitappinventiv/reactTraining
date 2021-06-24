import { GET_USER_DATA } from "../../../../utils/actionTypes";

export const getUserData = (userData: any) => {
  return {
    type: GET_USER_DATA,
    payload: userData,
  };
};
