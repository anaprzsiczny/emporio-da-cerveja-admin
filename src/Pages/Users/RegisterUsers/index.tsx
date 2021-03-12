import React from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import Input from '../../../Components/Input';
import InputButton from '../../../Components/InputButton';
import { SubmitUserTypes } from '../../../Types/submitTypes';

const RegisterUsers = () => {

  const {register, handleSubmit, errors} = useForm()

  const onSubmit = (data: SubmitUserTypes) => {
    
    const name = data.name
    const email = data.email
    const password = data.password
    const role = data.role

    const request = {
      name: name,
      email: email,
      password: password,
      role: role
    }
    //MANDAR O USUÁRIO PARA A API COM O REDUX
  }

  return (
    <div>
      <Helmet>
        <title>Usuário | Empório da Cerveja</title>
      </Helmet>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome
          <Input name="name" type="text" inputRef={register({required: true})}/>
          {errors.name && <p>Nome é necessário para cadastrar um usuário</p>}
        </label>
        <label>
          E-mail
          <Input name="email" type="email" inputRef={register({required: true})}/>
          {errors.email && <p>E-mail é necessário para cadastrar um usuário</p>}
        </label>
        <label>
          Senha
          <Input name="password" type="password" inputRef={register({required: true})}/>
          {errors.password && <p>Senha é necessária para cadastrar um usuário</p>}
        </label>
        <label>
          Permissão
          <label>
            Administrador
            <Input name="role" type="radio" value="admin" inputRef={register({required: true})}/>
          </label>
          <label>
            Editor
            <Input name="role" type="radio" value="editor" inputRef={register({required: true})}/>
          </label>
          {errors.role && <p>Tipo de permissão é necessária para cadastrar um usuário</p>}
        </label>
        <InputButton content={"Cadastrar Produto"} />
      </form>

    </div>
  )
}

export default RegisterUsers