import axios from "axios";

const API_URL = "http://localhost:8080/api/timetables";

export const getTimetables = () => axios.get(API_URL);
export const addTimetable = (data) => axios.post(API_URL, data);
export const deleteTimetable = (id) => axios.delete(`${API_URL}/${id}`);
