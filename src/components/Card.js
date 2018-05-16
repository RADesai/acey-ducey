import React from 'react'
import './Card.css';

const Card = props => {
    const { suit, value } = props;
    return (
        <div className="card">
            <div className="card-value">
                { value }
            </div>
            <div className="card-suit">
                { suit }
            </div>
        </div>
    );
}

export default Card;