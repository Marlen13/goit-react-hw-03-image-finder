import axios from 'axios';

// const API_KEY = '37030497-adb1b30a9790add5f50421470';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// // axios.defaults.params = {
// //   image_type: 'photo',
// //   orientation: 'horizontal',
// //   per_page: 12,
// // };

// export const getImages = async ({ inputValue, page }) => {
//     const response = await axios.get(`?q=${inputValue}&page=1&image_type=photo&orientation=horizontal&per_page=${page}`);
//     return response;
// }
const API_KEY = 'iiBMMMUy3ai8Gt939EJY8ogtAWv4TqGQmRP5nCF29sr7V2fanjeGkESR';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async ({ inputValue, page }) => {
  const response = await axios.get(`search?query=${inputValue}&page=${page}`);
  return response;
};