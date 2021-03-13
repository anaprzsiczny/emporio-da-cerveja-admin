import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router';
import Input from '../../../Components/Input';
import InputButton from '../../../Components/InputButton';
import useLogout from '../../../Hooks/useLogout';
import { SubmitProductTypes } from '../../../Types/submitTypes';

const RegisterProducts = () => {

  const [token] = useState<string | null>(localStorage.getItem("token"))

  useLogout(token)

  const {register, handleSubmit, errors} = useForm()

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
    //MANDAR O PRODUTO PARA A API COM O REDUX
  }

  return (
    <div>
      <Helmet>
      <title>Produtos | Empório da Cerveja</title>
      </Helmet>

      {!token && <Redirect to="/login" />}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Título
          <Input name="title" type="text" inputRef={register({required: true})}/>
          {errors.title && <p>Título é necessário para cadastrar o produto</p>}
        </label>
        <label>
          Preço
          <Input name="price" type="text" value="R$" inputRef={register({required: true})}/>
          {errors.price && <p>Preço é necessário para cadastrar o produto</p>}
        </label>
        <label>
          Descrição
          <Input name="description" type="text" inputRef={register({required: true})}/>
          {errors.description && <p>Descrição é necessária para cadastrar o produto</p>}
        </label>
        <label>
          URL da Imagem
          <Input name="image" type="text" inputRef={register({required: true})}/>
          {errors.image && <p>URL é necessária para cadastrar o produto</p>}
        </label>
        <InputButton content={"Cadastrar Produto"} />
      </form>

    </div>
  )
}

export default RegisterProducts