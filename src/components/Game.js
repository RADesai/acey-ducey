import React from 'react';
import './Game.css';

const Game = props => {
    const { deal, inPlay, deck, chips, hand } = props;
    return (
        <div className="game-container">
            <button className="play-button" onClick={deal}>
                PLAY
            </button>
            <br />
            <br />
            {inPlay ? <div className="inPlay-indicator" /> : null}
            <br />
            {inPlay ? (
                <div>
                    <div>Chips: {chips}</div>
                    <div>Hand Low: {hand.low}</div>
                    <div>Hand High: {hand.high}</div>
                </div>
            ) : null}
        </div>
    );
};

export default Game;
