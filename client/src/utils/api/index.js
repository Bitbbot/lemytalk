import axios from 'axios';

const $host = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// eslint-disable-next-line import/prefer-default-export
export { $host };
