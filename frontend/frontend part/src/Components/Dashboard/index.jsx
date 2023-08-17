import { useContext, useEffect } from "react"
import { DashboardContainer, StyledHeader, StyledHeader_divUpper, StyledHeader_divLower, StyledMain, StyledSpan, StyledUl, StyledLi, StyledClass, StyledDivModal, StyledCloseModalButton } from './styled'
import { UserInfoContext } from "../../Providers/UserInfoContext"
import Modal from 'react-modal'
import { CreateModalContext } from "../../Providers/ModalContext"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { ContactContext } from "../../Providers/ContactContext"
import { ModalUpdate } from '../ModalUpdate'



export const DashboardPage = () => {


    const { openModal, closeModal, modal, modalUpdate, updateCloseModal, setModalUpdate, setCurrentContact } = useContext(CreateModalContext)
    const { info, exit } = useContext(UserInfoContext)
    const { createContact, contacts, getContacts } = useContext(ContactContext)

    useEffect(() => {
        getContacts()
    }, [])

    const CreateContactForm = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        phoneNumber: yup.string().required(),
    })

    const { register, handleSubmit, formState: { erros } } = useForm({
        resolver: yupResolver(CreateContactForm),
    })


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            padding: '0px',
            border: 'none',
        },
    };



    return (
        <DashboardContainer>
            <StyledHeader>
                <StyledHeader_divUpper>
                    <h1>Projeto FullStack</h1>
                    <button onClick={exit}>Sair</button>
                </StyledHeader_divUpper>
                <StyledHeader_divLower>
                    {info != null && (<h2>Olá, {info.name}</h2>)}
                </StyledHeader_divLower>
            </StyledHeader>
            <StyledMain>
                <StyledSpan>
                    <p>Contatos</p>
                    <button onClick={openModal}>+</button>
                </StyledSpan>
                {contacts.length > 0 ?
                    <StyledUl>
                        {contacts.map((contact) => (
                            <StyledLi key={contact.id} onClick={(event) => {
                                event.stopPropagation()
                                setModalUpdate(true)
                                setCurrentContact(contact)
                            }}>
                                <p>{contact.name}</p>
                                <StyledClass>
                                    <p>{contact.email}</p>
                                </StyledClass>
                            </StyledLi>
                        ))}
                    </StyledUl>
                    : <p>Nenhum contato cadastrado</p>
                }
                <Modal
                    isOpen={modal}
                    onRequestClose={closeModal}
                    overlayClassName='modal-overlay'
                    style={customStyles}>
                    <StyledDivModal>
                        <span>
                            <p>Cadastrar contato</p>
                        </span>
                        <form onSubmit={handleSubmit(createContact)}>
                            <label htmlFor="">Nome</label>
                            <input type="text" {...register('name')} />
                            <label htmlFor="">Email</label>
                            <input type="text" {...register('email')} />
                            <label htmlFor="">Telefone</label>
                            <input type="text" {...register('phoneNumber')} />
                            <button type="submit">Cadastrar contato</button>
                        </form>
                        <StyledCloseModalButton onClick={closeModal}>x</StyledCloseModalButton>
                    </StyledDivModal>
                </Modal>
                <Modal
                    isOpen={modalUpdate}
                    onRequestClose={updateCloseModal}
                    overlayClassName='modal-overlay'
                    style={customStyles}>
                    <ModalUpdate />
                </Modal>
            </StyledMain>
        </DashboardContainer>
    )
}