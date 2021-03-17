import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Input from '../../Components/Input';
import InputButton from '../../Components/InputButton';
import { postLoginRequest } from '../../Store/Ducks/Users/actions';
import { SubmitLoginTypes } from '../../Types/submitTypes';
import './login.css'

const Login = () => {

  const { register, handleSubmit, errors } = useForm()

  const dispatch = useDispatch()

  const { loading, error, login } = useSelector((state: any) => state.user)

  const onSubmit = (data: SubmitLoginTypes) => {
    
    const email = data.email
    const password = data.password

    const request: SubmitLoginTypes = {
      email,
      password
    }
    
    dispatch(postLoginRequest(request))
  }

  useEffect(() => {
    if(error === true){
      toast.error("Não foi possível fazer login!")
    }
  }, [error]) 

  return (
    <div className="container-login">
      <Helmet>
        <title>Login | Empório da Cerveja</title>
      </Helmet>
      <Toaster />
      
      <div className="wrapper-form-login">
        <img src="/assets/logo-nome.svg" alt="logo empório da cerveja"/>
        {loading === true && <p>Carregando...</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <label htmlFor="email">
            E-mail:
            <Input id="email" name="email" type="email" inputRef={register({required: true})}/>
            {errors.email && <p>Nome obrigatório</p>}
          </label>
          <label htmlFor="password">
            Senha:
            <Input id="password" name="password" type="password" inputRef={register({required: true})}/>
            {errors.password && <p>Senha obrigatória</p>}
          </label>
          <div className="button-login">
            <InputButton content={"Entrar"} />
          </div>
        </form>
      </div>
      {login === true && <Redirect to="/" />}
    </div>
  )
}

export default Login