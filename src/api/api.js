import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "e60106e2-53e1-4caf-ad75-463578dfe8db" },
})

export const userAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getUserProfile (userid) {
        return instance.get(`profile/` + userid).then(response => response.data)
    },
    getUserStatus (userid) {
        return instance.get(`profile/status/` + userid).then(response => response.data)
    },
    updateUserStatus (status) {
        return instance.put(`profile/status/`, {status}).then(response => response.data)
    },
    savePhoto (photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }} ).then(response => response.data)
    }
}

export const followAPI = {
    deleteFollow (id) {
        return instance.delete(`follow/${id}`,).then(response => response.data)
    },
    addFollow (id) {
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    }
}

export const authAPI = {
    getAuthLogin () {
        return instance.get(`auth/me`).then(response => response.data)
    },
    logInUser (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logOutUser () {
        return instance.delete(`auth/login`)
    }
}
