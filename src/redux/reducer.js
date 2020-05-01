const initialState = {
    player1: 'Jim',
    player2: 'Bim',
    name: 'John',
    turn: 1,
    gameActive: true,
    field: [
        null, null, null,
        null, null, null,
        null, null, null
    ]
}

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
                gameActive: !state.gameActive
            };

        default:
            return state;
    }
}

export default reducer;