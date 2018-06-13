import React from 'react';
import Card from './Card';
import './Game.css';

const getInPlayIndicator = () => <div className="inPlay-indicator" />;

const startGame = (shuffleDeck, deal) => {
    shuffleDeck();
    deal();
};

const getStartGameButton = (shuffleDeck, deal) => (
    <button
        className="play-button"
        onClick={() => startGame(shuffleDeck, deal)}
    >
        PLAY
    </button>
);

const Game = props => {
    const { deal, shuffleDeck, inPlay, chips, hand } = props;
    return (
        <div className="game">
            {inPlay ? (
                <div className="box box-1 box-left">
                    <div className="game-card game-card-low">
                        <Card value={hand.low} />
                    </div>
                </div>
            ) : null}
            <div className="box box-1 box-center">
                {inPlay
                    ? getInPlayIndicator()
                    : getStartGameButton(shuffleDeck, deal)}
            </div>
            {inPlay ? (
                <div className="box box-1 box-right">
                    <div className="game-card game-card-high">
                        <Card value={hand.high} />
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Game;
