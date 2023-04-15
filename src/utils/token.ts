export const removeTokens = () => {
  localStorage.removeItem('user_token');
  localStorage.removeItem('gos_token');
};
