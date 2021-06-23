import axios from "axios";

const createPostApiCall = (
  url: string,
  params: object,
  successCallback: Function,
  errorCallback: Function
) => {
  axios
    .post(url, params)
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      errorCallback(error);
    });
};

export default {
  createPostApiCall,
};
