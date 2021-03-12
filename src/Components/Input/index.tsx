import React from 'react';
import { InputTypes } from '../../Types/inputTypes';

const Input = (props: InputTypes) => {
  return(
    <input name={props.name} type={props.type} ref={props.inputRef} value={props?.value}/>
  )
}

export default Input