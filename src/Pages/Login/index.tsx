import React from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import Input from '../../Components/Input';
import InputButton from '../../Components/InputButton';
import { SubmitLoginTypes } from '../../Types/submitTypes';

const Login = () => {

  const {register, handleSubmit, errors} = useForm()

  const onSubmit = (data: SubmitLoginTypes) => {
    
    const email = data.email
    const password = data.password

    const request = {
      email: email,
      password: password
    }
    //MANDAR O LOGIN DO USUÁRIO PARA O REDUCER COM DISPATCH
  }

  return (
    <div>
      <Helmet>
        <title>Login | Empório da Cerveja</title>
      </Helmet>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          E-mail
          <Input name="email" type="email" inputRef={register({required: true})}/>
          {errors.email && <p>Nome obrigatório</p>}
        </label>
        <label>
          Senha
          <Input name="password" type="password" inputRef={register({required: true})}/>
          {errors.password && <p>Senha obrigatória</p>}
        </label>
        <InputButton content={"Entrar"} />
      </form>
    </div>
  )
}

export default Login