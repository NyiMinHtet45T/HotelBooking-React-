import axios from "axios";
import { getToken } from "./AuthService";

const BASE_URL_OF_BOOKING = "http://localhost:8080/api/booking";

axios.interceptors.request.use( config => {
    config.headers['Authorization'] = getToken();
    return config;
}, err => Promise.reject(err))

export const addBooking = (booking) => axios.post(BASE_URL_OF_BOOKING+"/add", booking);

export const getAllBooking = () => axios.get(BASE_URL_OF_BOOKING+"/list-booking");

export const deleteBookingById = (id) => axios.delete(BASE_URL_OF_BOOKING+"/"+id);

export const getAlreadyExitsBookingById = (id) => axios.get(BASE_URL_OF_BOOKING+"/AlreadyBk/"+id);

export const getUserByBookingByConfimationCode = (confirCode) => axios.get(BASE_URL_OF_BOOKING+"/confirmationCode/"+confirCode);