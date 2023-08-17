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
        name: yup.string(),
        email: yup.string(),
        phoneNumber: yup.string()
    })

    const { setModalUpdate, currentContact, setCurrentContact } = useContext(CreateModalContext)
    const { updateContact, removeContact } = useContext(ContactContext)

    const { register, handleSubmit, formState: { erros } } = useForm({
        resolver: yupResolver(UpdateContactForm),
        defaultValues: { name: currentContact?.name, email: currentContact?.email, phoneNumber: currentContact?.phoneNumber }
    })

    const submit = async (formData) => {
        console.log(formData)

        await updateContact(currentContact.id, formData)
        setCurrentContact(null)
        setModalUpdate(false)
    }

    return (
        <StyledDivModalUpdate>
            <form onSubmit={handleSubmit(submit)} >
                <input type="text" {...register('name')} defaultValue={currentContact?.name} />
                <input type="text" {...register('email')} defaultValue={currentContact?.email} />
                <input type="text" {...register('phoneNumber')} defaultValue={currentContact?.phoneNumber} />
                <button type='submit'>Atualizar contato</button>
            </form >
            <StyledCloseModalButton onClick={() => {
                setCurrentContact(null)
                setModalUpdate(false)
            }}><MdClose size={24} /></StyledCloseModalButton>
            <button type='button' onClick={() => {
                removeContact(currentContact.id);
                setModalUpdate(false)
            }}>Excluir</button>
        </StyledDivModalUpdate>
    )
}