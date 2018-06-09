import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './actions/actions';
import Game from './components/Game';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="app-title">Acey Deucy</div>
                <div className="app-description">
                    <div className="app-description-title">How To Play</div>
                    <div className="app-description-body">
                        Before the action, each player must add their ante into
                        the pot. Two cards are then dealt face-up to one player.
                        That player then bets from nothing to the amount that is
                        in the pot at the time whether or not the third card
                        will numerically fall in between the first two. If the
                        third card falls in between the two other cards, the
                        bettor takes the amount he bet out of the pot; if the
                        third card falls outside of the two other cards, the
                        bettor must add what he bet to the pot; and if the third
                        card matches the numerical value of one of the other two
                        cards, the bettor must add to the pot double what he
                        bet.
                    </div>
                </div>
                <Game
                    inPlay={this.props.inPlay}
                    chips={this.props.chips}
                    hand={this.props.hand}
                    deck={this.props.deck}
                    {...this.props.actions}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { inPlay, chips, hand, deck } = state.gameReducer;
    return { inPlay, chips, hand, deck };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                ...actions
            },
            dispatch
        )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
