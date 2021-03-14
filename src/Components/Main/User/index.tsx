import React from 'react';
import { AiOutlineUserDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { deleteUserRequest } from '../../../Store/Ducks/Users/actions';
import './user.css';

const User = (props: any) => {

  const dispatch = useDispatch()

  const deleteUser = (id: number) => {
    dispatch(deleteUserRequest(id))
  }

  return(
    <div className="user-item">
      <div>
        <p><strong>{props.item.name}</strong></p>
      </div>
      <div>
        <p>{props.item.email}</p>
      </div>
      <div>
        <p>{props.item.role}</p>
      </div>
      <div className="wrapper-delete-user">
        <AiOutlineUserDelete onClick={() => deleteUser(props.item.id)} className="delete-user"/>
      </div>
    </div>
  )
}

export default User