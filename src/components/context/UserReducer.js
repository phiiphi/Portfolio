const userReducer = (state, action) =>{
    switch (action.type) {
        case 'GET_USERS':
            
            return {
                ...state,
                user:   action.payload
            };
    
        default:
            return state;
    }

}

export default userReducer;