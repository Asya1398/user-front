const Config = {
  API_URL: process.env.REACT_APP_URL || window.location.origin,
};

const config = {
  ...Config,
  DEFAULT_REQUEST_TIMEOUT: 30000,
};

export default config;
