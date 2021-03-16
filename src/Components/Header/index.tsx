import React from 'react';
import PageTitle from './PageTitle';
import UserInfo from './UserInfo';
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