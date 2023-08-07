import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';


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
                    const response = await axios.get('https://localhost.3001', {
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
            const response = await axios.post('https://localhost.3001', data)
            localStorage.setItem('userToken', response.data.token)
            localStorage.setItem('userId', response.data.user.id)
            setInfo(response.data.user)
            setContact(response.data.user.contact)
            navigate('/dashboardpage')

        } catch (error) {
            toast.error('Usuário não existente')
        }
    }


    const userRegister = async (data) => {
        try {
            await axios.post('https://localhost.3001', data)
            navigate('/')
            toast.success('Cadastro realizado com sucesso!')
        } catch (error) {
            toast.error('Usuário já existente')
        }
    }


    return (
        <UserInfoContext.Provider value={{ info, setInfo, userLogin, userRegister, exit, contact, setContact }}>
            {children}
        </UserInfoContext.Provider>
    )
}
