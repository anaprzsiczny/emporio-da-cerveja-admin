import React from 'react';
import PageTitle from './PageTitle/pageTitle';
import UserInfo from './UserInfo/userInfo';
import './header.css'

const Header = (props: any) => {
  return(
    <div className="header">
      <PageTitle pagina={props.pagina}/>
      <UserInfo />
    </div>
  )
}

export default Header