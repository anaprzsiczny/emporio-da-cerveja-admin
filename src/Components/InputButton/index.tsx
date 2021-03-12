import React from 'react';
import { ButtonTypes } from '../../Types/buttonTypes';

const InputButton = (props: ButtonTypes) => {
  return(
    <button>{props.content}</button>
  )
}

export default InputButton