import React from 'react';
import { ButtonTypes } from '../../Types/buttonTypes';
import './inputButton.css'

const InputButton = (props: ButtonTypes) => {
  return(
    <button className="input-button">{props.content}</button>
  )
}

export default InputButton