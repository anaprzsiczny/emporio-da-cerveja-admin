import React from 'react';

const HomeCard = (props: any) => {
  return (
    <div>
      <p>{props.text}</p>
      <p>{props.total}</p>
    </div>
  )
}

export default HomeCard