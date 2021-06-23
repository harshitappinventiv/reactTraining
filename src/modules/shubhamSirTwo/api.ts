import axios from "axios";

const baseUrl = "https://reqres.in/";

const createPostApiCall = (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function
) => {
  axios
    .post(baseUrl + endPoint, params)
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      errorCallback(error);
    });
};

const createGetApiCall = (
  endPoint: string,
  params: string = "",
  successCallback: Function,
  errorCallback: Function
) => {
  axios
    .get(baseUrl + endPoint + params)
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      errorCallback(error);
    });
};

export default {
  createPostApiCall,
  createGetApiCall,
};
