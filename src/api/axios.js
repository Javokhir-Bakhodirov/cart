import axios from "axios";

const apiAxios = axios.create({
	baseURL: "https://dummyjson.com",
	timeout: 10000,
});

export default apiAxios;
