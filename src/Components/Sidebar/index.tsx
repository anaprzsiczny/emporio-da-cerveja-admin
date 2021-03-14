import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { loadUserLogout } from '../../Store/Ducks/Users/actions';
import Item from './Item';
import "./sidebar.css";
import { HiHome, HiUser, HiUserAdd, HiViewList, HiDocumentAdd, HiLogout } from 'react-icons/hi'

const Sidebar = () => {

  const [sair, setSair] = useState<boolean>(false)

  const dispatch = useDispatch()

  const Logout = () => { 

    localStorage.clear()
    dispatch(loadUserLogout())
    setSair(true)
  }

  return(
    <div className="container-sidebar">
      <img src="/assets/logo-nome.svg" alt="Logo Empório da Cerveja"/>
      <div className="wrapper-sidebar">
        <Item para="/" texto="Página Inicial" >
          <HiHome />
        </Item>
        <Item para="/users" texto="Usuários">
          <HiUser />
        </Item>
        <Item para="/users/register" texto="Cadastrar usuário">
          <HiUserAdd />
        </Item>
        <Item para="/products" texto="Produtos">
          <HiViewList />
        </Item>
        <Item para="/products/register" texto="Cadastrar produto">
          <HiDocumentAdd />
        </Item>
      </div>
      <button onClick={Logout} className="botao-logout"><HiLogout />Sair</button>
      {sair === true && <Redirect to="/login" />}
    </div>
  )
}

export default Sidebar