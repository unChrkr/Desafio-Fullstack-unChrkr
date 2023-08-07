import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import React from 'react'
import { useForm } from 'react-hook-form'
import { StyledDivModalUpdate, StyledCloseModalButton } from './styled'
import { useContext } from 'react'
import { CreateModalContext } from '../../Providers/ModalContext'
import { ContactContext } from '../../Providers/ContactContext'
import { MdClose } from "react-icons/md"

export const ModalUpdate = () => {

    const UpdateContactForm = yup.object().shape({
        status: yup.string().required(),
    })

    const { setModalUpdate, currentContact, setCurrentContact } = useContext(CreateModalContext)
    const { updateContact, removeContact } = useContext(ContactContext)

    const { register, handleSubmit, formState: { erros } } = useForm({
        resolver: yupResolver(UpdateContactForm),
        defaultValues: { status: currentContact?.status }
    })

    const submit = async (formData) => {

        await updateContact(currentContact.id, formData)
        setCurrentContact(null)
        setModalUpdate(false)
    }


    return (
        <StyledDivModalUpdate>
            <form onSubmit={handleSubmit(submit)} >
                <input type="text" disabled value={currentContact?.name} />
                <input type="text" disabled value={currentContact?.email} />
                <input type="text" disabled value={currentContact?.phoneNumber} />
                <button>Atualizar contato</button>
            </form >
            <StyledCloseModalButton onClick={() => {
                setCurrentContact(null)
                setModalUpdate(false)
            }}><MdClose size={24} /></StyledCloseModalButton>
            <button type='button' onClick={() => removeContact(currentContact.id)}>Excluir</button>
        </StyledDivModalUpdate>
    )
}