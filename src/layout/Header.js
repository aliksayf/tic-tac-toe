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

    // const line1 =(field[0] + field[1] + field[2])
    // const line2 =(field[3] + field[4] + field[5])
    // const line3 =(field[6] + field[7] + field[8])
    // const line4 =(field[0] + field[3] + field[6])
    // const line5 =(field[1] + field[4] + field[7])
    // const line6 =(field[2] + field[5] + field[8])
    // const line7 =(field[0] + field[4] + field[8])
    // const line8 =(field[6] + field[4] + field[2])

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

    const win = () => {
        if (lines.includes('XXX'))  {
            props.finish()
            props.setWinner(1)
            return 'Player 1 won';
        } else if ( lines.includes('OOO')) {
            props.finish()
            props.setWinner(2)
            return 'Player 2 won'
        } else  return whoTurn();
    }

    const winner = (number) => {

    };

    const isGameActive = props.gameActive ? 'hidden' : '';


    return(
        <div>
            {win()}
            <button className={isGameActive} onClick={props.start}>Start New Game</button>
        </div>
    )
}

const mapStateToProps = state => ({
    gameActive: state.gameActive,
    field: state.field,
    turn: state.turn
});

const mapDispatchToProps = dispatch => ({
    finish: () => dispatch({ type: 'FINISH', payload: null}),
    start: () => dispatch({ type: 'START', payload: null}),
    setWinner: (num) => dispatch({ type: 'WINNER', payload: num})
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);