import { axios } from '../util/'

const getPersonDetail = async id => {
  const { data } = await axios.get(`listPersonGrid/${id}`)

  return data
} 

export default getPersonDetail

