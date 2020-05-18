import * as actionTypes from '../actions/actiontypes';

const initialState = {
    message: "",
    error: "",
    status: null,
    isAuthendticated: false

}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
                status: action.payload.status,
                error: null,
                isAuthendticated: true
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                message: action.payload.message,
                status: action.payload.status,
                isAuthendticated: false
            }
        default:
            return state;
    }
}
export default authReducer;