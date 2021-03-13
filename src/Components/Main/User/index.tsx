import React from 'react';
import { AiOutlineUserDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { deleteUserRequest } from '../../../Store/Ducks/Users/actions';

const User = (props: any) => {

  const dispatch = useDispatch()

  const deleteUser = (id: number) => {
    dispatch(deleteUserRequest(id))
  }

  return(
    <div>
      <p>{props.item.name}</p>
      <p>{props.item.email}</p>
      <p>{props.item.role}</p>
      <AiOutlineUserDelete onClick={() => deleteUser(props.item.id)}/>
    </div>
  )
}

export default User