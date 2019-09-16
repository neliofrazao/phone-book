import { axios } from '../../util'

const getPhoneBookList = async () => {
  const { data } = await axios.get('phoneBook')

  return data
}

const getContactInfo = async contactId => {
  const { data } = await axios.get(`phoneBook/${contactId}`)

  return data
}

const createNewContact = async payload => {
  const { data } = await axios.post(`phoneBook`, payload)

  return data
}

const deleteContact = async contactId => {
  const { data } = await axios.delete(`phoneBook/${contactId}`)

  return data
}

export default {
  getPhoneBookList,
  getContactInfo,
  createNewContact,
  deleteContact,
}
