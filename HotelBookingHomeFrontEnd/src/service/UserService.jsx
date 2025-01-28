import axios from "axios";

const BASE_URL_OF_USERS = "http://localhost:8080/api/user";

export const getUserById = (id) => axios.get(BASE_URL_OF_USERS+"/"+id);

export const getUserHistorybyId = (id) => axios.get(BASE_URL_OF_USERS+"/user-booking-history/"+id);