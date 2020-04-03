export const prepareQuery = (url, payload) => ({
  url: `https://test-archimides.free.beeceptor.com/${url}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  data: JSON.stringify(payload),
  withCredentials: true,
});
