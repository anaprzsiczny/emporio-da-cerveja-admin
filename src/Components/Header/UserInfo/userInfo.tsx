import React from 'react';
import { useSelector } from 'react-redux';
import './userInfo.css'

const UserInfo = () => {

  const { currentUser } = useSelector((state: any) => state.user)

  return(
    <div className="header-user">
      <p>Usuário: <strong>{currentUser.name}</strong></p>
      <p>Cargo: <strong>{currentUser.role}</strong></p>
    </div>
  )
}

export default UserInfo