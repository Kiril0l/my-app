import { authAPI } from "../api/api"

const SET_AUTH_DATA = 'SET_AUTH_DATA'


let startState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: false,
}

const authReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

// наши ActionCreator:
export const setAuthData = (userId, email, login, isAuth) => ({ type: SET_AUTH_DATA, data: { userId, email, login, isAuth } })

export const getLogonThunkCreator = () => {
    return async (dispatch) => {
        let data = await authAPI.getAuthLogin()
        if (data.resultCode === 0) {
            let { id, email, login } = data.data
            dispatch(setAuthData(id, email, login, true))
        }
    }
}

export const logInThunkCreator = (email, password, rememberMe, setStatus, setSubmitting) => {
    return async (dispatch) => {
        let response = await authAPI.logInUser(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getLogonThunkCreator())
        } else {
            setStatus(response.data.messages)
        }
        setSubmitting(false)

    }
}
export const logOutThunkCreator = () => {
    return async (dispatch) => {
        let response = await authAPI.logOutUser()
        console.log(response.data)
        if (response.data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false))
        }
    }
}




export default authReducer