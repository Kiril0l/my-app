import { getLogonThunkCreator } from "./authReducer"

const SET_INITIALIZED = 'SET_INITIALIZED'


let startState = {
    initialized: false,
}

const appReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

// наши ActionCreator:
export const setInitialized = () => ({ type: SET_INITIALIZED })

export const setInitializedThunkCreator = () => (dispatch) => {
    let promise = dispatch(getLogonThunkCreator())
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())
    }
    )
}





export default appReducer