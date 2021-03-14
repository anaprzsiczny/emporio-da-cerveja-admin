import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Header from '../../Components/Header/header';
import HomeCard from '../../Components/Main/HomeCard/homeCard';
import Sidebar from '../../Components/Sidebar';
import useLogout from '../../Hooks/useLogout';
import { getProductsRequest } from '../../Store/Ducks/Products/actions';
import { getUsersRequest } from '../../Store/Ducks/Users/actions';
import './home.css'

const Home = () => {

  const [token] = useState<string | null>(localStorage.getItem("token"))

  useLogout(token)

  const { currentUser, welcome, users, loading, error } = useSelector((state: any) => state.user)

  const { products } = useSelector((state: any) => state.product)

  const dispatch = useDispatch()

  useEffect(() => {
    if(welcome === true){
      toast.success(`Seja bem-vindo(a), ${currentUser.name}`)
    }

    if(error === true){
      toast.error("Não foi possível carregar. Tente novamente.")
    }

    dispatch(getUsersRequest())
    dispatch(getProductsRequest())
  }, [])
  
  return (
    <div className="container">
      <Helmet>
        <title>Home | Empório da Cerveja</title>
      </Helmet>

      {!token && <Redirect to="/login" />}

      <Toaster />
      
      <div>
        <Sidebar />
      </div>

      <div className="main-content">
        <div>
          <Header pagina="Página Inicial"/>
        </div>
        {loading === true && <p>Carregando...</p>}
        <div className="wrapper-cards">
          {users !== [] && <HomeCard total={users.length} text="Usuários"/>}
          {products !== [] && <HomeCard total={products.length} text="Produtos"/>}
        </div>
      </div>
    </div>
  )
}

export default Home