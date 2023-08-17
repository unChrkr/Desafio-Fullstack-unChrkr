import { createContext, useEffect, useState } from "react"
import { api } from "../Sevices/api.jsx"
import { toast } from 'react-toastify';



export const ContactContext = createContext({})

export const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState({})


  async function getContacts() {
    const userId = localStorage.getItem('userId')
    const response = await api.get(`users/contact/${userId}`)
    setContacts(response.data)
    console.log(response.data)
  }

  async function createContact(data) {
    try {
      const userToken = localStorage.getItem('userToken')
      const response = await api.post('contact', data, {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      })
      setContacts(prev => [...prev, data])
      toast.success('Contato criado com sucesso!')
    } catch (error) {
      toast.error('Contato já existente')
      console.log(error)
    }
  }

  const removeContact = async (contactId) => {
    try {
      const userToken = localStorage.getItem('userToken')
      const response = await api.delete(`contact/${contactId}`, {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      })

      toast.success('Contato deletado com sucesso')

      const updatedContact = contact.filter(element => element.id !== contactId);
      setContacts(updatedContact);
    } catch (error) {
      console.log(error);
    }
  }

  const updateContact = async (contactId, formData) => {
    try {
      const userToken = localStorage.getItem('userToken')
      const response = await api.patch(`contact/${contactId}`, formData, {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      })
      toast.success('Contato atualizado com sucesso')
      const updatedContact = contacts.map(contact => {
        if (contactId === contact.id) {
          return { ...contact, ...formData };
        } else {
          return contact
        }
      })
      setContacts(updatedContact)

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ContactContext.Provider value={{ contacts, setContacts, createContact, removeContact, updateContact, getContacts }}>
      {children}
    </ContactContext.Provider>
  )
}





