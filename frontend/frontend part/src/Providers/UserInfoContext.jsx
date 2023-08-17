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

    const removeUser = async (userId) => {
        try {
            const userToken = localStorage.getItem('userToken');
            const response = await api.delete(`user/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            });

            toast.success('Usuário deletado com sucesso');
            const updatedUsers = users.filter(user => user.id !== userId);
            setUsers(updatedUsers);
        } catch (error) {
            console.log(error);
        }
    };

    const updateUser = async (userId, formData) => {
        try {
            const userToken = localStorage.getItem('userToken');
            const response = await api.patch(`user/${userId}`, formData, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            });

            toast.success('Usuário atualizado com sucesso');

            const updatedUsers = users.map(user => {
                if (userId === user.id) {
                    return { ...user, ...formData };
                } else {
                    return user;
                }
            });
            setUsers(updatedUsers);
        } catch (error) {
            console.log(error);
        }
    };

    async function getAllUsers() {
        try {
            const userToken = localStorage.getItem('userToken');
            const response = await api.get('users', {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            });

            const userList = response.data;

            console.log(userList);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserInfoContext.Provider value={{ info, setInfo, userLogin, userRegister, exit, contact, setContact, removeUser, updateUser, getAllUsers }}>
            {children}
        </UserInfoContext.Provider>
    )
}
