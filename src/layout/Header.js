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
    ]

    // const win = () => {
    //     if( line1 === 'XXX' || line2 === 'XXX' || line3 === 'XXX' || line4 === 'XXX'
    //     || line5 === 'XXX' || line6 === 'XXX' || line7 === 'XXX' || line8 === 'XXX')
    //         {
    //      return ' win')
    //
    //         // if (turn == 1){
    //         //     console.log(`Player 2 won`)
    //         // } else return `Player 1 won`
    //     }
    // };

    // const win = () => {
    //     let playerName;
    //     lines.map(el => el === 'XXX' ? playerName = 'Player 1 won' : el === 'OOO' ? playerName = 'Player 2 won' : playerName = 'whoTurn')
    //     return playerName
    // };

    const win = lines.includes('XXX') ? 'Player 1 won' : lines.includes('OOO') ? 'Player 2 won' : whoTurn();

    return(
        <div>
            {/*{whoTurn()}*/}
            {win}
        </div>
    )
}

const mapStateToProps = state => ({
    state: state,
    name: state.name,
    field: state.field,
    turn: state.turn
});

const mapDispatchToProps = dispatch => ({
    clickX: (i) => dispatch({ type: 'CLICK_X', payload: i}),
    clickO: (i) => dispatch({ type: 'CLICK_O', payload: i})
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);