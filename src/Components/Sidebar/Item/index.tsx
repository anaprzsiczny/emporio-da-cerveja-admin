import React from 'react';
import { Link } from 'react-router-dom';
import './item.css'

interface ItemProps {
  para: string,
  texto: string,
  children?: any
}

const Item = (props: ItemProps) => {
  return(
    <div className="wrapper-link-sidebar">
      {props.children}
      <Link to={props.para} className="link-sidebar">{props.texto}</Link>
    </div>
  )
}

export default Item