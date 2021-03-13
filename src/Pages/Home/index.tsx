import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import HomeCard from '../../Components/Main/HomeCard/homeCard';
import useLogout from '../../Hooks/useLogout';
import { getProductsRequest } from '../../Store/Ducks/Products/actions';
import { getUsersRequest } from '../../Store/Ducks/Users/actions';

const Home = () => {

  const [token] = useState<string | null>(localStorage.getItem("token"))

  useLogout(token)

  const { currentUser, success, users, loading, error } = useSelector((state: any) => state.user)

  const { products, errorProduct, loadingProduct } = useSelector((state: any) => state.product)

  const dispatch = useDispatch()

  useEffect(() => {
    if(success === true){
      toast.success(`Seja bem-vindo(a), ${currentUser.name}`)
    }

    if(error === true || errorProduct === true){
      toast.error("Não foi possível carregar. Tente novamente.")
    }

    dispatch(getUsersRequest())
    dispatch(getProductsRequest())
  }, [])
  
  return (
    <div>
      <Helmet>
        <title>Home | Empório da Cerveja</title>
      </Helmet>

      {!token && <Redirect to="/login" />}

      <Toaster />
      {loading === true || loadingProduct === true && <p>Carregando...</p>}
      {users !== [] && <HomeCard total={users.length} text="Usuários"/>}
      {products !== [] && <HomeCard total={products.length} text="Produtos"/>}
      <Link to="/users">Usuários</Link>
      <Link to="/users/register">Cadastrar Usuário</Link>
    </div>
  )
}

export default Home