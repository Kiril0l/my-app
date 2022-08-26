import { followAPI, userAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SWITCH_IS_LOADING = 'SWITCH_IS_LOADING'
const BUTTON_FOLLOWING_IS_DISABLED = 'BUTTON_FOLLOWING_IS_DISABLED'


let startState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 20,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [],
    portionPage: 10,
}

const usersReducer = (state = startState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case SWITCH_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case BUTTON_FOLLOWING_IS_DISABLED:
            return {
                ...state,
                followingInProgress: action.isLoading ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

// наши ActionCreator:
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unFollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const switchIsLoading = (isLoading) => ({ type: SWITCH_IS_LOADING, isLoading })
export const followIsLoading = (isLoading, userId) => ({ type: BUTTON_FOLLOWING_IS_DISABLED, isLoading, userId })

const followUnFollowFlow = async (dispatch, userId, request, action) => {
    dispatch(followIsLoading(true, userId))
    const data = await request(userId)
    if (data.resultCode === 0) {
        dispatch(action(userId))
    }
    dispatch(followIsLoading(false, userId))
}


export const unFollowThunkCreator = (userId) => {
    return async (dispatch) => {
        let request = followAPI.deleteFollow
        let action = unFollow
        followUnFollowFlow(dispatch, userId, request, action)
    }
}

export const followThunkCreator = (userId) => {
    return async (dispatch) => {
        let request = followAPI.addFollow
        let action = follow
        followUnFollowFlow(dispatch, userId, request, action)
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(switchIsLoading(true))
        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items));
        dispatch(switchIsLoading(false))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

export const changeCurrentPageThunkCreator = (pageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(switchIsLoading(true))
        let data = await userAPI.getUsers(pageNumber, pageSize)
        dispatch(setUsers(data.items))
        dispatch(switchIsLoading(false))
    }
}



export default usersReducer