const USER_TOKEN_KEY = 'userToken';
const USER_DATA_KEY = 'userData';

export default class Token {
  static getTokenWithoutHttpCall = () => {
    try {
      return localStorage.getItem(USER_TOKEN_KEY);
    } catch (error) {
      return null;
    }
  };

  static addToken = data => {
    try {
      localStorage.setItem(USER_TOKEN_KEY, data.token);
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(data.data));
      return true;
    } catch (error) {
      // add error to error logs
      return false;
    }
  };

  static removeToken = () => {
    try {
      localStorage.removeItem(USER_TOKEN_KEY);
      return true;
    } catch (error) {
      return false;
    }
  };

  static getUserData = () => {
    try {
      return JSON.parse(localStorage.getItem(USER_DATA_KEY));
    } catch (error) {
      return null;
    }
  };
}
