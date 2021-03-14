import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Header from '../../../Components/Header/header';
import Input from '../../../Components/Input';
import InputButton from '../../../Components/InputButton';
import Sidebar from '../../../Components/Sidebar';
import useLogout from '../../../Hooks/useLogout';
import { postUserRequest } from '../../../Store/Ducks/Users/actions';
import { SubmitUserTypes } from '../../../Types/submitTypes';

const RegisterUsers = () => {

  const [token] = useState<string | null>(localStorage.getItem("token"))

  useLogout(token)

  const {register, handleSubmit, errors} = useForm()

  const { success, currentUser } = useSelector((state: any) => state.user)

  const dispatch = useDispatch()

  const onSubmit = (data: SubmitUserTypes) => {
    
    const name = data.name
    const email = data.email
    const password = data.password
    const role = data.role

    const request = {
      name,
      email,
      password,
      role
    }
    
    dispatch(postUserRequest(request))

    if(success === true) {
      toast.success("Usuário cadastrado com sucesso!")
    }
  }

  return (
    <div className="container">
      <Helmet>
        <title>Usuário | Empório da Cerveja</title>
      </Helmet>

      {!token && <Redirect to="/login" />}
      {currentUser.role !== "admin" && <Redirect to="/" />}

      <Toaster />

      <div>
        <Sidebar />
      </div>

      <div className="main-content">
        <div>
          <Header pagina="Cadastrar Novo Usuário"/>
        </div>

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
            {errors.role && <p>Tipo de permissão é necessário para cadastrar um usuário</p>}
          </label>
          <InputButton content={"Cadastrar Produto"} />
        </form>
      </div>
    </div>
  )
}

export default RegisterUsers