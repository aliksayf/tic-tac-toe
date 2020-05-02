import React from "react";
import { connect } from "react-redux";

function Footer(props) {

    const { statistic, player1, player2 } = props;

    return(
        <div>
            <h5>SCORE:</h5>
            <div className='d-inline'>
                <div>
                    {player1}: {statistic[1]}
                </div>
                <div>
                    {player2}: {statistic[2]}
                </div>
                <div>
                    Draw: {statistic[0]}
                </div>

            </div>
        </div>
    )

};

const mapStateToProps = state => ({
    statistic: state.statistic,
    player2: state.player2,
    player1: state.player1
});

const mapDispatchToProps = dispatch => ({
    start: () => dispatch({ type: 'START', payload: null}),
    setWinner: (num) => dispatch({ type: 'WINNER', payload: num}),
    setWinStyle: (cells) => dispatch({ type: 'SET_STYLE', payload: cells})
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);