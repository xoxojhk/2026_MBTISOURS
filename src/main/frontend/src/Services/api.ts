import axios from "axios";

/**
* 모든 API 요청에 자동으로 Authorization: Bearer 토큰 붙음.
* ex) api.get("/user/me")
*/
const api = axios.create({
  baseURL: "http://localhost:8879/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;