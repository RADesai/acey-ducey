import React from 'react';
import './Card.css';

const Card = props => {
    const { value } = props;
    return (
        <div className="card">
            <div className="card-value">{value}</div>
        </div>
    );
};

export default Card;
