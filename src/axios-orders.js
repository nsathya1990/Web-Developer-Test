import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://apps-web-developer-test-default-rtdb.firebaseio.com/',
});

export default instance;
