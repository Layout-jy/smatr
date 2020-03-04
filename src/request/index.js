import axios from 'axios'

const request = axios.create({
  baseURL:'/smart',
  timeout:5000,
  headers:{'X-Custom-Header': 'foobar'}
})

export default request