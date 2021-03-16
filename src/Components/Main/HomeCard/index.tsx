import React from 'react';
import './homeCard.css';

const HomeCard = (props: any) => {
  return (
    <div className="home-card">
      <p>{props.text}</p>
      <h2>{props.total}</h2>
    </div>
  )
}

export default HomeCard