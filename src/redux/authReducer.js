import { authAPI, captchaAPI } from "../api/api"

const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'


let startState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: false,
    captchaUrl: null,
}

const authReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captcha,
            }
        default:
            return state
    }
}

// наши ActionCreator:
export const setAuthData = (userId, email, login, isAuth) => ({ type: SET_AUTH_DATA, data: { userId, email, login, isAuth } })
export const setCaptchaUrl = (captcha) => ({ type: SET_CAPTCHA_URL, captcha })

export const getLogonThunkCreator = () => {
    return async (dispatch) => {
        let data = await authAPI.getAuthLogin()
        if (data.resultCode === 0) {
            let { id, email, login } = data.data
            dispatch(setAuthData(id, email, login, true))
        }
    }
}

export const logInThunkCreator = (email, password, rememberMe, setStatus, setSubmitting, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.logInUser(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getLogonThunkCreator())
        } else {
            if (response.data.resultCode === 10) {
                const captchaUrl = await captchaAPI.getCaptchaUrl()
                dispatch(setCaptchaUrl(captchaUrl.url))
            }
            setStatus(response.data.messages)
        }
        setSubmitting(false)

    }
}
export const logOutThunkCreator = () => {
    return async (dispatch) => {
        let response = await authAPI.logOutUser()
        if (response.data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false))
        }
    }
}




export default authReducer