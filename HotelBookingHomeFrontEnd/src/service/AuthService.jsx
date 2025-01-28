import axios from "axios";

const BASE_URL_OF_AUTHENTICATION = "http://localhost:8080/api/auth";

axios.interceptors.request.use( config => {
    config.headers['Authorization'] = getToken();
    return config;
}, err => Promise.reject(err))

export const register = (registerObj) => axios.post(BASE_URL_OF_AUTHENTICATION+"/register", registerObj);

export const login = (loginObj) => axios.post(BASE_URL_OF_AUTHENTICATION+"/login", loginObj);
// ===========
export const setToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");
// ===========
export const setUserId = (userId) => sessionStorage.setItem("userId", userId);

export const getUserId = () => sessionStorage.getItem("userId");
// ============
export const setUserRole = (userRole) => sessionStorage.setItem("userRole", userRole);

export const getUserRole = () => sessionStorage.getItem("userRole");
// ============
export const setUserNameOrEmails = (userNameOrEmail) => sessionStorage.setItem("authenticated", userNameOrEmail);

export const getUserNameOrEmail = () => sessionStorage.getItem("authenticated");
// ============
export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
}
//=============
export const isUserLogIn = () => {
    const username = getUserNameOrEmail();
    if(username != null) {
        return true;
    }
    else return false
}

export const isAdmin = () => {
    const admin = getUserRole();
    return admin === "ROLE_ADMIN";
}

export const isUser = () => {
    const user = getUserRole();
    return user === "ROLE_USER";
}