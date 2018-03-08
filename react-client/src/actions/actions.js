import axios from 'axios';
import { SEARCH, GET_HISTORY, SAVE_HISTORY } from '../helpers/constants';

const searchYT = (payload) => {
  const url = '/videos';

  return axios
    .get(url, payload)
    .then(user => ({
      type: SEARCH,
      payload: user.data,
    }))
    .catch((error) => {
      console.log('search err! ', error);
    });
};

const saveHistory = (payload) => {
  const url = '/histories';

  axios
    .post(url, payload)
    .catch((error) => {
      console.log('save err!', error);
    });
};

const getHistory = (payload) => {
  const url = '/histories';

  return axios
    .get(url, payload)
    .then(histories => ({
      type: GET_HISTORY,
      payload: histories,
    }))
    .catch((error) => {
      console.log('get err!', error);
    });
};


export {
  searchYT,
  saveHistory,
  getHistory,
};
