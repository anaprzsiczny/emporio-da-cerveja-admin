import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Product from '../../../Components/Main/Product';
import useLogout from '../../../Hooks/useLogout';
import { getProductsRequest } from '../../../Store/Ducks/Products/actions';
import { SubmitProductTypes } from '../../../Types/submitTypes';

const ListProducts = () => {

  const [token] = useState<string | null>(localStorage.getItem("token"))

  useLogout(token)

  const { products, errorProduct, loadingProduct } = useSelector((state: any) => state.product)

  const dispatch = useDispatch()

  useEffect(() => {

    if(errorProduct === true){
      toast.error("Não foi possível carregar. Tente novamente.")
    }

    dispatch(getProductsRequest())
  }, [])

  return (
    <div>
      <Helmet>
        <title>Produtos | Empório da Cerveja</title>
      </Helmet>

      <Toaster />

      {!token && <Redirect to="/login" />}

      {loadingProduct === true && <p>Carregando...</p>}

      {products !== [] &&
        products.map((item: SubmitProductTypes) => (
          <Product item={item} key={item.id} />
        ))
      }
    </div>
  )
}

export default ListProducts