import api from "../actions/api";

const setAuthToken = token => {
  if (token) {
    // apply to every request
    api.defaults.headers.common["Authorization"] = token;
  } else {
    // delete auth header
    delete api.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
