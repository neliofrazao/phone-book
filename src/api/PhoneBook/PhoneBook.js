import { axios } from '../../util'

const getPhoneBookList = async () => {
  const { data } = await axios.get('phoneBook')

  return data
}

export default {
  getPhoneBookList,
}