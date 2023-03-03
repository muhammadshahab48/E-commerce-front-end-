
// Auth Reducer 
import { LOGIN_USER, LOGOUT_USER } from "../../action-types/action-types";
 

// Handeling states here ...!

const INIT_STATE = {
    authenticatedUser : null
};

const authReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            // console.log(action.payload)
            return {
                ...state, 
                authenticatedUser: action.payload
            }

            case LOGOUT_USER:
                return {
                    ...state,
                    authenticatedUser: null
                }
    
        default:
            return state;
    };
};

export default authReducer;