import axios from 'axios'

const BASE_URL = 'http://localhost:4000/'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {'Access-Control-Allow-Origin': '*'}
})
 
export default axiosInstance