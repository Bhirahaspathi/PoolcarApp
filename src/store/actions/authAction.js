import * as actionTypes from '../actions/actiontypes';
import axios from 'axios';

export const authSuccess = (message) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: message
    }
}

export const authFail = (message) => {
    return {
        type: actionTypes.AUTH_FAIL,
        payload: message
    }
}

export const auth = (uname, password) => {
    return dispatch => {
        const authData = {
            userName: uname,
            password: password
        }
        axios.post("http://localhost:5000/login", authData)
            .then(res => {
                console.log(res.data)
                let status = res.data.status
                if (status === 200) {
                    dispatch(authSuccess(res.data))
                }
                else {
                    console.log(status)
                    dispatch(authFail(res.data))
                }
            }).catch(err => {
                console.log(err)
                dispatch(authFail())
            })
    }
}