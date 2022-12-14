import { userAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_SATUS = 'SET_USER_SATUS'
const SET_USER_PHOTO = 'SET_USER_PHOTO'
const SAVE_ERROR = 'SAVE_ERROR'


let startState = {
    posts: [
        { id: 1, message: 'Hi', author: 'Kirill Zuzin', like: '5' },
        { id: 2, message: 'Good night', author: 'Anna Kolina', like: '15' },
        { id: 3, message: 'How are you?', author: 'Artem Lapkin', like: '11' },
    ],
    newPostText: '',
    profile: null,
    status: "",
    error: "",
}

const profileReducer = (state = startState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let nText = state.newPostText
            let newPost = {
                id: 5,
                message: nText,
                author: 'Unknown',
                like: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
            // в post мы сначала копис=руем посты из стэйта, а потом еще и передаем новый пост через ",".  newPostText просто типо копируем, но записываем не копию, а перезатирается
            // state.posts.reverse()
        }
        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                // posts: [...state.posts]
                newPostText: action.newText
            }
            // сокращенная запись копирования объекта, было вот так: stateCopy = {...state}; stateCopy.posts= [...state.posts]

        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
                error: ""
            }
        }
        case SET_USER_SATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}             
            }
        }
        case SAVE_ERROR: {
            return {
                ...state,
                error: action.errorText             
            }
        }
        default:
            return state
    }
}


export const addPostActionCreater = () => ({ type: ADD_POST })
// стрелочная функция, которая возвращает объект. Запись сокращена и убран return и фигурные скобки, которые тело функции определяют
export const updateNewPostTextActionCreater = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_SATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SET_USER_PHOTO, photos })
export const saveError = (errorText) => ({ type: SAVE_ERROR, errorText })


export const getUserProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        const data = await userAPI.getUserProfile(userId)
        dispatch(setUserProfile(data))
    }
}

export const getUserStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        const data = await userAPI.getUserStatus(userId)
        dispatch(setUserStatus(data))
    }
}

export const updateUserStatusThunkCreator = (status) => {
    return async (dispatch) => {
        const data = await userAPI.updateUserStatus(status)
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
}

export const savePhotoThunkCreator = (photoFile) => {
    return async (dispatch) => {
        const data = await userAPI.savePhoto(photoFile)
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos))
        }
        else dispatch(saveError(data.messages[0]))
    }
}

export const updateDataProfileThunkCreator = (values) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId
        const data = await userAPI.updateDataProfile(values)
        if (data.resultCode === 0) {
            dispatch(getUserProfileThunkCreator(userId))
        }
        else {
            dispatch(saveError(data.messages[0]))
            return Promise.reject(data.messages[0])}
    }
}





export default profileReducer