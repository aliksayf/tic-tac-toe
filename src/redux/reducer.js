const initialState = {
    player1: 'Jim',
    player2: 'Bim',
    winner: 1,
    turn: 1,
    gameActive: true,
    winCombinationClass: [
        'cell', 'cell', 'cell',
        'cell', 'cell', 'cell',
        'cell', 'cell', 'cell'
    ],
    field: [
        null, null, null,
        null, null, null,
        null, null, null
    ]
};

const emptyField = [
    null, null, null,
    null, null, null,
    null, null, null
];

const emptyStyle = [
    'cell', 'cell', 'cell',
    'cell', 'cell', 'cell',
    'cell', 'cell', 'cell'
];



const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CLICK_X':

            const newField = [...state.field]
            newField[action.payload] = 'X';
            return {
                ...state,
                field: newField,
                turn: 2
            };

        case 'CLICK_O':

            const newField2 = [...state.field]
            newField2[action.payload] = 'O';
            return {
                ...state,
                field: newField2,
                turn: 1
            };

        case 'FINISH':
            return {
                ...state,
                gameActive: false
            };

        case 'START':
            return {
                ...state,
                field: emptyField,
                winCombinationClass: emptyStyle,
                gameActive: true
            };

        case 'WINNER':
            return {
                ...state,
                winner: action.payload,
                turn: action.payload
            };

        case 'SET_STYLE':
            const newComb = [...state.winCombinationClass]
            action.payload.map(el => newComb[el] += ' comb')
            return {
                ...state,
                winCombinationClass:  newComb
            };

        default:
            return state;
    }
}

export default reducer;