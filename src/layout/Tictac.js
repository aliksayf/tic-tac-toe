import React from "react";
import {connect} from "react-redux";

function Tictac(props) {

    const {field, turn, gameActive, winClass} = props;
    const click = (i) => {

        if (turn === 1) {
            props.clickX(i)
        } else {
            props.clickO(i)

        }
    };

    const isGameActive = !gameActive ? 'inactive' : '';

    return (
        <div className={isGameActive + ' mx-auto mt-3'}>

            <div className='line'>
                <div className={winClass[0]} onClick={() => click(0)}>{field[0]}</div>
                <div className={winClass[1]} onClick={() => click(1)}>{field[1]}</div>
                <div className={winClass[2]} onClick={() => click(2)}>{field[2]}</div>
            </div>

            <div className='line'>
                <div className={winClass[3]} onClick={() => click(3)}>{field[3]}</div>
                <div className={winClass[4]} onClick={() => click(4)}>{field[4]}</div>
                <div className={winClass[5]} onClick={() => click(5)}>{field[5]}</div>
            </div>

            <div className='line'>
                <div className={winClass[6]} onClick={() => click(6)}>{field[6]}</div>
                <div className={winClass[7]} onClick={() => click(7)}>{field[7]}</div>
                <div className={winClass[8]} onClick={() => click(8)}>{field[8]}</div>
            </div>

        </div>
    )
};

const mapStateToProps = state => ({
    winClass: state.winCombinationClass,
    gameActive: state.gameActive,
    field: state.field,
    turn: state.turn
});

const mapDispatchToProps = dispatch => ({
    clickX: (i) => dispatch({type: 'CLICK_X', payload: i}),
    clickO: (i) => dispatch({type: 'CLICK_O', payload: i}),
    finish: () => dispatch({type: 'FINISH', payload: null}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tictac);