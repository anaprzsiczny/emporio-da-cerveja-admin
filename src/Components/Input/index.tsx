import React from 'react';
import { InputTypes } from '../../Types/inputTypes';
import './input.css'

const Input = (props: InputTypes) => {
  return(
    <input 
      name={props.name} 
      type={props.type} 
      ref={props.inputRef} 
      value={props?.value} 
      className="input-form"
      id={props.id}
      data-testid={props.id}
    />
  )
}

export default Input