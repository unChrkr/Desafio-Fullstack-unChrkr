import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import { RegisterContainer, FormContainer, PinkButton, HeaderSpan, FormDiv } from './styled'
import { useContext } from "react";
import { UserInfoContext } from "../../Providers/UserInfoContext";


export const RegisterForm = ({ }) => {

    const { userRegister } = useContext(UserInfoContext)

    const FormDemands = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().required('Email obrigatório'),
        password: yup.string().required('Senha obrigatória')
            .matches(/[a-z] || [A-Z]/, "Deve conter ao menos 1 letra")
            .matches(/(\d)/, "Deve conter ao menos 1 número")
            .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
            .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres")
            .required('Email obrigatório'),
    })

    const navigate = useNavigate()
    const back = () => navigate(-1)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(FormDemands)
    })


    const handleForm = event => {
        event.preventDefault()

        navigate('/')
    }

    return <RegisterContainer>
        <HeaderSpan>
            <h1>Projeto FullStack</h1>
            <button onClick={back}>Voltar</button>
        </HeaderSpan>
        <FormContainer onSubmit={handleSubmit(userRegister)}>
            <form action="">
                <FormDiv>
                    <h2>Crie sua conta</h2>
                    <p>Rápido e grátis, vamos nessa</p>
                </FormDiv>
                <label htmlFor="">Nome</label>
                <input placeholder="Digite aqui seu nome" {...register('name')} />
                {errors.name?.message}
                <label htmlFor="">Email</label>
                <input placeholder="Digite seu email" type="email" {...register('email')} />
                {errors.email?.message}
                <label htmlFor="">Senha</label>
                <input placeholder="Digite sua senha" type="password" {...register('password')} />
                {errors.password?.message}
                <PinkButton type="submit">Cadastrar</PinkButton>
            </form>
        </FormContainer>
    </RegisterContainer>
}




