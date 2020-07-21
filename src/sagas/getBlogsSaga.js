import axios from 'axios'
const API_URL = "http://localhost:3004/blogs/";

const getBlogsSaga = () => {
  return axios
  .get(API_URL)
  .then(function (response) {
    const data = response.data;
    return data;
  })
  .catch(function (error) {
    console.log(error);
 });
}

export {getBlogsSaga}