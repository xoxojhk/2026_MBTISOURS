import api from "./api";

const API_URL = "http://localhost:8879/api/auth";

export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", {
      email,
      password,
  });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

// 회원가입 함수 추가
export const signup = async (name: string, email: string, password: string) => {
  console.log('사인업옸음')
  console.log(name + email + password)
  const response = await api.post("/auth/signup", {
    name,
    email,
    password,
  });
  return response.data;
};