import base64 from 'base-64';

import Configs from './configs';
import Token from './token';

const { baseUrl, loginUrl } = Configs.api;

/**
 * Logs in a user
 * @param {object} userData An object containing login details of a user i.e email and password
 * @param {object} errorHandler A callback function to handle errors that result from the application
 */
export const loginUser = async (userData, errorHandler) => {
  try {
    const { email: username, password } = userData;
    const loginCredentials = base64.encode(`${username}:${password}`);
    const response = await fetch(`${baseUrl + loginUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${loginCredentials}`,
      },
    });
    const jsonResponse = await response.json();
    if (!response.ok) {
      errorHandler(jsonResponse);
      return;
    }
    Token.addToken(jsonResponse);
    return jsonResponse;
  } catch (error) {
    errorHandler(error);
  }
};
