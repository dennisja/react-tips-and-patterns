import Token from './token';
import { loginUser } from './user';

export const headers = {
  'Content-Type': 'application/json',
};

/**
 * Send or retrieves data from end points where no data is to be sent
 * @param {string} url The end point to get or send data from or to
 * @param {string} method The method to use
 */
export const getData = async (url, method = 'GET') => {
  let token = Token.getTokenWithoutHttpCall();

  // login user
  if (!token) {
    const user = await loginUser(
      {
        email: 'dennisjjagwe@gmail.com',
        password: 'password',
      },
      console.log,
    );
    token = user && user.token;
  }

  headers['x-access-token'] = token;
  return await fetch(url, {
    method,
    headers,
  });
};

/**
 * Gets or deletes category
 * @param {string} url The end point to get or delete data from
 * @param {function} callback The function to handle errors that occur
 * @param {string} method The method to use on the endpoint
 */
export const getOrDelete = async (url, callback, method = 'GET') => {
  try {
    const response = await getData(url, method);
    const jsonResponse = await response.json();
    if (!response.ok) {
      callback(jsonResponse);
      return;
    }
    return jsonResponse;
  } catch (error) {
    callback(error);
  }
};
