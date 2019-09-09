import { axios } from '../../util'

const getPhoneBookList = async () => {
  const { data } = await axios.get('phoneBook')

  return data
}

const getContactInfo = async contactId => {
  const { data } = await axios.get(`phoneBook/${contactId}`)

  return data
}

const createNewContact = async payload => await axios.post(`phoneList`, payload)

const deleteContact  = async contactId => await axios.delete(`phoneBook/${contactId}`)

export default {
  getPhoneBookList,
  getContactInfo,
  createNewContact,
  deleteContact,
}