import React from 'react';
import PageTitle, { PageTitleProps } from './PageTitle';
import UserInfo from './UserInfo';
import './header.css'

const Header = (props: PageTitleProps) => {
  return(
    <div className="header">
      <PageTitle pagina={props.pagina}/>
      <UserInfo />
    </div>
  )
}

export default Header