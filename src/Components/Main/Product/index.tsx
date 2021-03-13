import React from 'react';
import { AiOutlineUserDelete } from 'react-icons/ai'

const Product = (props: any) => {

  const deleteProduct = (id: number) => {
    
  }

  return(
    <div>
      <p>{props.item.title}</p>
      <p>{props.item.price}</p>
      <p>{props.item.description}</p>
      <img src={props.item.image} />
      <AiOutlineUserDelete onClick={() => deleteProduct(props.item.id)}/>
    </div>
  )
}

export default Product