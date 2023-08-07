import { createContext, useContext } from "react"
import { api } from "../Sevices/api.jsx"
import { UserInfoContext } from "./UserInfoContext.jsx"
import { toast } from 'react-toastify';




export const ContactContext = createContext()

export const ContactContextProvider = ({ children }) => {

  const { contact, setContact } = useContext(UserInfoContext)

  async function createContact(data) {
    try {
      const userToken = localStorage.getItem('userToken')
      const response = await api.post('/users/contact', data, {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      })
      setContact([...contact, data])
      toast.success('Contato criado com sucesso!')
    } catch (error) {
      toast.error('Contato já existente')
    }
  }

  const removeContact = async (contactId) => {
    try {
      const userToken = localStorage.getItem('userToken')
      const response = await api.delete(`/users/contact/${contactId}`, {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      })

      toast.success('Contato deletado com sucesso')

      const updatedContact = contact.filter(element => element.id !== contactId);
      setContact(updatedContact);
    } catch (error) {
      console.log(error);
    }
  }

  const updateContact = async (contactId, formData) => {
    try {
      const userToken = localStorage.getItem('userToken')
      const response = await api.put(`/users/contact/${contactId}`, formData, {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      })
      toast.success('Contato atualizado com sucesso')
      const updatedContact = contact.map(contact => {
        if (contactId === contact.id) {
          return { ...contact, ...formData };
        } else {
          return contact
        }
      })
      setContact(updatedContact)

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ContactContext.Provider value={{ contact, setContact, createContact, removeContact, updateContact }}>
      {children}
    </ContactContext.Provider>
  )
}


