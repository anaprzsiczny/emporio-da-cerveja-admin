import React from 'react';
import { FiDelete } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductRequest } from '../../../Store/Ducks/Products/actions';
import './product.css'

const Product = (props: any) => {

  const dispatch = useDispatch()

  const { currentUser } = useSelector((state: any) => state.user)

  const deleteProduct = (id: number) => {
    dispatch(deleteProductRequest(id))
  }

  return(
    <div className="product-item" data-testid="product">
      <div>
        <p><strong>{props.item.title}</strong></p>
      </div>
      <div>
        <p>{props.item.price}</p>
      </div>
      <div>
        <img src={props.item.image} alt="product"/>
      </div>
      <div>
        {currentUser.role === "admin" && 
          <FiDelete onClick={() => deleteProduct(props.item.id)} className="delete-product"/>
        }
      </div>
    </div>
  )
}

export default Product