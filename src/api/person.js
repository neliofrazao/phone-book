import { axios } from '../util/'

const getPerson = async () => {
  const { data } = await axios.get('phoneList')

  return data
} 

export default getPerson

