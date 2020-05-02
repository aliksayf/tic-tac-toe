import React from "react";
import { connect } from "react-redux";

function Header(props) {

    const {turn, field, player1, player2, winner} = props;

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
        const cellCombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
        lineX !== -1 ? props.setWinStyle(cellCombination[lineX]) : props.setWinStyle(cellCombination[lineO])
    };

    if (lines.includes('XXX')) {
        props.finish()
        setCombination()
        props.setWinner(1)
    } else if (lines.includes('OOO')) {
        props.finish()
        setCombination()
        props.setWinner(2)
    } else if (!field.includes(null)) {
        props.finish()
        props.draw(0)
    }

    console.log('turn', turn)

    const gameInfo = () => {
        switch (winner) {
            case 1:
                return `${player1} won!`;
            case 2:
                return `${player2} won!`;
            case 0:
                return `DRAW!`;
            case null:
                switch (turn) {
                    case 1:
                        return `turn: ${player1}`;
                    case 2:
                        return `turn: ${player2}`;
                    default:
                        return
                }
            default:
                return
        }
    };

    const isGameActive = props.gameActive ? 'hidden' : '';

    return (
        <div className='m-md-auto row mt-5 pt-4'>
            <div className='d-inline col-5'><h5>{gameInfo()}</h5></div>
            <button className={isGameActive + ' col-4 pr-2'} onClick={props.start}>New Game</button>
        </div>
    )
}

const mapStateToProps = state => ({
    gameActive: state.gameActive,
    field: state.field,
    player2: state.player2,
    player1: state.player1,
    winner: state.winner,
    turn: state.turn
});

const mapDispatchToProps = dispatch => ({
    finish: () => dispatch({type: 'FINISH', payload: null}),
    start: () => dispatch({type: 'START', payload: null}),
    setWinner: (num) => dispatch({type: 'WINNER', payload: num}),
    draw: (num) => dispatch({type: 'DRAW', payload: num}),
    setWinStyle: (cells) => dispatch({type: 'SET_STYLE', payload: cells})
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);