import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    //check if token in local storage
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
