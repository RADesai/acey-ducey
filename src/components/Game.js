import React from 'react';
import Card from './Card';
import './Game.css';

const getInPlayIndicator = () => (
    <div>
        <div className="inPlay-indicator" />
        <span>Playing Acey Ducey!</span>
    </div>
);

const startGame = (shuffleDeck, deal) => {
    shuffleDeck();
    deal();
};

const Game = props => {
    const { deal, shuffleDeck, inPlay, chips, hand } = props;
    return (
        <div className="game">
            {!inPlay ? (
                <button
                    className="play-button"
                    onClick={() => startGame(shuffleDeck, deal)}
                >
                    PLAY
                </button>
            ) : null}
            <br />
            <br />
            {inPlay ? getInPlayIndicator() : null}
            <br />
            {inPlay ? (
                <div>
                    <div>Chips: {chips}</div>
                    <div>Hand Low: {hand.low}</div>
                    <div>Hand High: {hand.high}</div>
                </div>
            ) : null}
            {inPlay ? (
                <div>
                    <div className="game-card game-card-low">
                        <Card value={hand.low} />
                    </div>
                    <hr />
                    <div className="game-card game-card-high">
                        <Card value={hand.high} />
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Game;
