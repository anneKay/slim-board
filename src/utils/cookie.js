/* eslint-disable jsx-a11y/anchor-is-valid */

/**
 * @class Abstracts browser cookie storage
 */
class CookieUtil {
  /**
   * @description Saves an item to browser cookie storage
   * @param {String} name The name of the string to be saved
   * @param {string} value of the string to be saved
   * @param {int} number of days it is set to expire
   * @returns {Object}
   */

  static setItem(name, value, days) {
    const maxAge = `max-age=${days * 24 * 60 * 60}`;
    document.cookie = `${name}=${value};domain=http:localhost:3001;${maxAge};path=/`;
  }

  static getItem(key) {
    const { cookie } = document;
    let result = '';
    if (cookie.includes(`${key}=`)) {
      result = `${cookie.split(`${key}=`)[1].split(';')[0]}`;
    }
    return result.trim();
  }

  static clearItem(key) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  }
}

export default CookieUtil;
