import * as actionTypes from '../actions/actiontypes';

const initialState = {
    offersList: null,
    loading: false,
    datas: null,
    fromInfo: false,
    toInfo: false,
    showAll: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_RIDES:
            return {
                ...state,
                offersList: action.payload
            }
        case actionTypes.SET_RIDES:
            return {
                ...state,
                datas: action.paysload,
                loading: true
            }
        case actionTypes.FROMINFO:
            return {
                ...state,
                fromInfo: true,
                showAll: false,
                toInfo: false
            }
        case actionTypes.TOINFO:
            return {
                ...state,
                toInfo: true,
                fromInfo: false,
                showAll: false
            }
        case actionTypes.SHOWALL:
            return {
                ...state,
                showAll: true,
                toInfo: false,
                fromInfo: false
            }
        default:
            return state;
    }
}
export default reducer;