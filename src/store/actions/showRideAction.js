import * as actionTypes from './actiontypes';
import axios from 'axios';

export const showrides = () => (dispatch) => {
    axios.get("http://localhost:5000/show_rides")
        .then(res => {
            dispatch({
                type: actionTypes.SHOW_RIDES,
                payload: res.data,
            });
        })
}
export const setRides = (data) => dispatch => {
    dispatch({
        type: actionTypes.SET_RIDES,
        paysload: data
    })
}

export const frominfo = () => dispatch => {
    dispatch(showrides())
    dispatch(setRides())
    dispatch({
        type: actionTypes.FROMINFO
    })
}

export const toinfo = () => dispatch => {
    dispatch(showrides())
    dispatch(setRides())
    dispatch({
        type: actionTypes.TOINFO
    })
}

export const showall = () => dispatch => {
    dispatch(showrides())
    dispatch(setRides())
    dispatch({
        type: actionTypes.SHOWALL
    })
}






