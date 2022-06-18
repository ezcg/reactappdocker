let dev = {};
dev.clienturl = "http://localhost:" + process.env.PORT + "/";
dev.apiUrl = "http://localhost:8080/api/";
dev.apiAuthUrl = "http://localhost:8080/auth/";
dev.GOOGLE_CLIENT_ID="542541208729-6sd5d91dq5gn0ggv4j47p3rub2m46a8n.apps.googleusercontent.com";
dev.GOOGLE_CLIENT_SECRET="bK1vphx_oQvM53ImxfeIdI2K";

// overwrite dev with any prod values
let prod = Object.assign({}, dev);
prod.url = "https://ezcg.com/";

const configs = process.env.REACT_APP_ENVIRONMENT === 'dev'
  ? dev
  : prod;

module.exports = configs;
