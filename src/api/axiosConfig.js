import axios from 'axios';

const axiosConfig = axios.create({baseURL: 'https://projetao-linkr.herokuapp.com'});
export default axiosConfig;