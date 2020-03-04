import axios from './index'

const getHomeData = ()=>{
  return axios.get('/home')
}
export { getHomeData }