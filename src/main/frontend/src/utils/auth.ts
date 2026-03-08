
/**
 * 로그인되어 있는지 확인
 */
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};