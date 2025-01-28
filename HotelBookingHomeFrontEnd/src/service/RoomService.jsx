import axios from "axios";

const BASE_URL_OF_ROOM = "http://localhost:8080/api/room";
const BASE_URL_OF_ROOM_PHTOURL = "http://localhost:8080/roomPhoto";

export const getRoomsByNoAndDateAndType = (avilableRoomByNoAndDateAndType) =>  axios.post(BASE_URL_OF_ROOM+"/find-availableRoomByDateAndType",avilableRoomByNoAndDateAndType);

export const getAllRoom = () => axios.get(BASE_URL_OF_ROOM+"/list-room");

export const getRoomById = (id) => axios.get(BASE_URL_OF_ROOM+"/"+id);

export const getRoomPhotUrl = (id) => axios.get(BASE_URL_OF_ROOM_PHTOURL+"/get-room/"+id);

export const addRoomByRoomAndPhoto = (roomAndPhotoObj) => axios.post(BASE_URL_OF_ROOM+"/add-room", roomAndPhotoObj);

export const deleteRoomById = (id) => axios.delete(BASE_URL_OF_ROOM+"/"+id);

export const updateRoomById = (id, roomAndPhotoObj) => axios.put(BASE_URL_OF_ROOM+"/"+id,roomAndPhotoObj);

export const getAllAvilableRoom = () => axios.get(BASE_URL_OF_ROOM+"/all-available-room");

