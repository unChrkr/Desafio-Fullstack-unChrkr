import { createContext, useState } from 'react'


export const CreateModalContext = createContext()

export const CreateModalProvider = ({ children }) => {

    const [modal, setModal] = useState(false)
    const [modalUpdate, setModalUpdate] = useState(false)
    const [currentContact, setCurrentContact] = useState(null)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    return (
        <CreateModalContext.Provider value={{ modal, closeModal, openModal, modalUpdate, setModalUpdate, currentContact, setCurrentContact }}>
            {children}
        </CreateModalContext.Provider>
    )
}

