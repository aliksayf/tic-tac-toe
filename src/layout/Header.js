import React from "react";
import { connect } from "react-redux";

function Header(props) {

    const { turn, field } = props;

    const whoTurn = () => {
        if(turn === 1){
            return "Player's 1 turn"
        } else if( turn === 2) {
            return "Player's 2 turn"
        }
    };

    const lines = [
        (field[0] + field[1] + field[2]),
        (field[3] + field[4] + field[5]),
        (field[6] + field[7] + field[8]),
        (field[0] + field[3] + field[6]),
        (field[1] + field[4] + field[7]),
        (field[2] + field[5] + field[8]),
        (field[0] + field[4] + field[8]),
        (field[6] + field[4] + field[2])
    ];

    const setCombination = () => {
        const lineX = lines.indexOf('XXX')
        const lineO = lines.indexOf('OOO')
        const cellCombination = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
        lineX !== -1 ? props.setWinStyle(cellCombination[lineX]) : props.setWinStyle(cellCombination[lineO])
    }

    const win = () => {
        if (lines.includes('XXX'))  {
            props.finish()
            setCombination()
            props.setWinner(1)
            return 'Player 1 won';
        } else if ( lines.includes('OOO')) {
            props.finish()
            setCombination()
            props.setWinner(2)
            return 'Player 2 won'
        } else  return whoTurn();
    };

    const isGameActive = props.gameActive ? 'hidden' : '';


    return(
        <div>
            {win()}
            <button className={isGameActive} onClick={props.start}>Start New Game</button>
        </div>
    )
};

const mapStateToProps = state => ({
    gameActive: state.gameActive,
    field: state.field,
    turn: state.turn
});

const mapDispatchToProps = dispatch => ({
    finish: () => dispatch({ type: 'FINISH', payload: null}),
    start: () => dispatch({ type: 'START', payload: null}),
    setWinner: (num) => dispatch({ type: 'WINNER', payload: num}),
    setWinStyle: (cells) => dispatch({ type: 'SET_STYLE', payload: cells})
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);