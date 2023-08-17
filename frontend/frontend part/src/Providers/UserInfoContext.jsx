import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { api } from "../Sevices/api";


export const UserInfoContext = createContext({})


export const UserInfoProvider = ({ children }) => {

    const navigate = useNavigate()

    const [info, setInfo] = useState(null)
    const [contact, setContact] = useState([])

    useEffect(() => {
        const autoLoginUser = async () => {
            const userToken = localStorage.getItem('userToken')
            if (userToken) {
                try {
                    const response = await api.post('login', {
                        headers: {
                            'Authorization': `Bearer ${userToken}`
                        }
                    })
                    setInfo(response.data)
                    setContact(response.data.contact)
                    navigate('/dashboardpage')
                } catch (error) {
                    console.log(error)
                }
            }
        }
        autoLoginUser()
    }, [])

    const exit = () => {
        localStorage.clear()
        navigate('/')
    }


    const userLogin = async (data) => {
        try {
            const response = await api.post('login', data)
            localStorage.setItem('userToken', response.data.token)
            localStorage.setItem('userId', response.data.user.id)
            setInfo(response.data.user)
            setContact(response.data.user.contact)
            navigate('/dashboardpage')

        } catch (error) {
            toast.error('Usuário não existente')
            console.log(error)
        }
    }


    const userRegister = async (data) => {
        try {
            await api.post('users', data)
            navigate('/')
            toast.success('Cadastro realizado com sucesso!')
        } catch (error) {
            toast.error('Usuário já existente')
            console.log(error)
        }
    }

    return (
        <UserInfoContext.Provider value={{ info, setInfo, userLogin, userRegister, exit, contact, setContact }}>
            {children}
        </UserInfoContext.Provider>
    )
}
