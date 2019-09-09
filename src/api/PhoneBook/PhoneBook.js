import { axios } from '../../util'

const getPhoneBookList = async () => {
  const { data } = await axios.get('phoneBook')

  return data
}

const deleteContact  = async contactId => await axios.delete(`phoneBook/${contactId}`)

export default {
  getPhoneBookList,
  deleteContact,
}