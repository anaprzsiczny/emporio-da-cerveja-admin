import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Header from '../../../Components/Header';
import Input from '../../../Components/Input';
import InputButton from '../../../Components/InputButton';
import Sidebar from '../../../Components/Sidebar';
import useLogout from '../../../Hooks/useLogout';
import { postProductRequest } from '../../../Store/Ducks/Products/actions';
import { SubmitProductTypes } from '../../../Types/submitTypes';
import './registerProducts.css'

const RegisterProducts = () => {

  const [token] = useState<string | null>(localStorage.getItem("token"))

  useLogout(token)

  const {register, handleSubmit, errors} = useForm()

  const dispatch = useDispatch()

  const { successProduct } = useSelector((state: any) => state.product)

  const onSubmit = (data: SubmitProductTypes) => {
    
    const title = data.title
    const price = data.price
    const description = data.description
    const image = data.image

    const request = {
      title: title,
      price: price,
      description: description,
      image: image
    }
    
    dispatch(postProductRequest(request))

    if(successProduct === true) {
      toast.success("Produto cadastrado com sucesso!")
    }
  }

  return (
    <div className="container">
      <Helmet>
      <title>Produtos | Empório da Cerveja</title>
      </Helmet>

      {!token && <Redirect to="/login" />}

      <Toaster />

      <div>
        <Sidebar />
      </div>

      <div className="main-content">
      <div>
        <Header pagina="Cadastrar Novo Produto"/>
      </div>
        <div className="wrapper-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">
              Título:
            </label>
            <Input id="title" name="title" type="text" inputRef={register({required: true})}/>
            {errors.title && <p>Título é necessário para cadastrar o produto</p>}
            <label htmlFor="price">
              Preço:
            </label>
            <Input id="price" name="price" type="text" inputRef={register({required: true})}/>
            {errors.price && <p>Preço é necessário para cadastrar o produto</p>}
            <label htmlFor="description">
              Descrição:
            </label>
            <Input id="description" name="description" type="text" inputRef={register({required: true})}/>
            {errors.description && <p>Descrição é necessária para cadastrar o produto</p>}
            <label htmlFor="image">
              URL da Imagem:
            </label>
            <Input id="image" name="image" type="text" inputRef={register({required: true})}/>
            {errors.image && <p>URL é necessária para cadastrar o produto</p>}
            <div className="register-product-button">
              <InputButton content={"Cadastrar Produto"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterProducts