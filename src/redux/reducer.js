const initialState = {
    allUsers: [],
    allReservations: [],
    allTransactions: []
};

const reducer = (state = initialState, action) => {
    switch( action.type ){
        case 'SIGNUP':
            let newUsers = {
                customerEmail: action.payload.customerEmail,
                customerPassword: action.payload.customerPassword,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                sex: action.payload.sex,
                address: action.payload.address
            };
            return {...state, allUsers : [...state.allUsers, newUsers]}
        case "RESERVATION": 
            return {...state,allReservations:action.payload.allReservations}
        default:
            return state;
    }
};

export default reducer;