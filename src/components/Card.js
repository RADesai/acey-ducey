import React from 'react';
import { CARDS } from '../utils/Constants';
import './Card.css';

const Card = props => {
    const { value } = props;
    return (
        <div className="card">
            <div className="card-value">{value}</div>
            <img src={CARDS[value].image} alt="card" />
        </div>
    );
};

export default Card;
