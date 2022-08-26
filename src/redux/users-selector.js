import { createSelector } from "reselect"

const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector( getUsers, (users) => {
    return users
})

// Используем сложный селетор. Он необходим, если наш селектор не приметивный, а он делает каки-то 
// вычисления или какая-то доп функция, которую на не нужно перезапускать постоянно. Получается, что
// мы ему указываем зависимости ( в нашем случае мы передаем ему приметивный силектор и если он не
// меняется, тогда мы ничего не делаем, а если поменялось что-то в "getUsers", тогда это измененное
// передается в "(users)" и пошло по функции. В нашем примере мы просто возвращаем этих же юзеров, но
// может выполняться какя-то логика) 

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsLoading = (state) => {
    return state.usersPage.isLoading
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}

export const getPortionPage = (state) => {
    return state.usersPage.portionPage
}