import React from 'react';
import './homeCard.css';

interface HomeCardProps {
  total: number,
  text: string
}

const HomeCard = (props: HomeCardProps) => {
  return (
    <div className="home-card" data-testid="card">
      <p>{props.text}</p>
      <h2>{props.total}</h2>
    </div>
  )
}

export default HomeCard