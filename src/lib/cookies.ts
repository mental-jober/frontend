export const setAccessTokenToCookie = (accessToken: string) => {
  document.cookie = `accessToken=${accessToken}; path=/`;
};

export const getAccessTokenCookie = () => {
  const cookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.split("=")[0] === "accessToken");
  return cookie ? cookie.split("=")[1] : null;
};

export const deleteAccessTokenCookie = () => {
  const date = new Date();

  const expires = "expires=" + date.toUTCString();
  const expiresCookie = `accessToken=; ${expires}; path=/`;
  document.cookie = expiresCookie;
};
