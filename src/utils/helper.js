import cookieUtil from './cookie';

export const prepareQuery = (url, payload) => ({
  url: `https://test-archimides.free.beeceptor.com/${url}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  data: JSON.stringify(payload),
  mode: 'cors',
});

export const isLoggedIn = () => cookieUtil.getItem('userData');

export const isAdmin = cookieUtil.getItem('isAdminUser');
