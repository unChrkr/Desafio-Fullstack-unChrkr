import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import { IndexContainer, FormContainer, StyledP, PinkButton, GreyButton } from './styled'
import { useContext } from "react";
import { UserInfoContext } from '../../Providers/UserInfoContext'


export const LoginForm = () => {

    const { userLogin } = useContext(UserInfoContext)

    const FormDemands = yup.object().shape({
        email: yup.string().required('Email obrigatório'),
        password: yup.string().required('Senha obrigatória')
    })

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(FormDemands)
    })

    const navigate = useNavigate()
    const toRegister = () => navigate('/registerform')

    return <IndexContainer>
        <h1>Projeto FullStack</h1>
        <FormContainer>
            <form onSubmit={handleSubmit(userLogin)}>
                <span>
                    <h2>Login</h2>
                </span>
                <label htmlFor="">Email</label>
                <input placeholder="Digite seu email" type={'email'} {...register('email')} />
                {errors.email?.message}
                <label htmlFor="">Senha</label>
                <input placeholder="Digite sua senha" type={'password'} {...register('password')} />
                {errors.password?.message}
                <PinkButton type="submit">Entrar</PinkButton >
                <StyledP>
                    <p>Ainda não possui uma conta?</p>
                </StyledP>
                <GreyButton onClick={toRegister}>Cadastre-se</GreyButton>
            </form>
        </FormContainer>
    </IndexContainer>
}