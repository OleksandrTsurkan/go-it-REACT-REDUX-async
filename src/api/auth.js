import axios from 'axios';
axios.defaults.baseURL = 'https://practices-api.vercel.app/';

export const signUp = async body => {
  const { data } = await axios.post('auth/signup', body);
  return data;
};
