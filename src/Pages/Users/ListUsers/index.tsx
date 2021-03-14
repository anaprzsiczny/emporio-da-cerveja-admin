import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Header from '../../../Components/Header/header';
import User from '../../../Components/Main/User';
import Sidebar from '../../../Components/Sidebar';
import useLogout from '../../../Hooks/useLogout';
import { getUsersRequest } from '../../../Store/Ducks/Users/actions';
import { SubmitUserTypes } from '../../../Types/submitTypes';

const ListUsers = () => {

  const [token] = useState<string | null>(localStorage.getItem("token"))

  useLogout(token)

  const { loading, error, users, currentUser } = useSelector((state: any) => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    if(error === true){
      toast.error("Não foi possível carregar. Tente novamente.")
    }

    dispatch(getUsersRequest())
  }, [])

  return (
    <div className="container">
      <Helmet>
        <title>Usuário | Empório da Cerveja</title>
      </Helmet>

      <Toaster />

      {!token && <Redirect to="/login" />}

      {currentUser.role !== "admin" && <Redirect to="/" />}

      <div>
        <Sidebar />
      </div>

      <div className="main-content">
        <div>
          <Header pagina="Usuários"/>
        </div>
        {loading === true && <p>Carregando...</p>}
        {users !== [] && 
          users.map((item: SubmitUserTypes) => (
            <User item={item} key={item.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default ListUsers