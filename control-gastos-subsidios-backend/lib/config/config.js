const path = require('path');
const debug = require('debug');
const parse = require('pg-connection-string').parse;
const dotenv = require('dotenv');

function getEnvironment() {
  return process.env.NODE_ENV || 'development';
}

function initializeEnv() {
  dotenv.config({
    path: path.resolve(process.cwd(), `.env.${getEnvironment()}`),
  });
}

function parseHerokuUrlIfPresent() {
  const url = process.env.DATABASE_URL;

  if (url === undefined) {
    return {};
  }

  const config = parse(url);

  // Heroku necesita sí o sí SSL, y para eso hay que habilitar el driver nativo.
  return {
    ...config,
    username: config.user,
    native: true,
  };
}

function normalizePort(val) {
  const portNum = parseInt(val, 10);

  if (Number.isNaN(portNum)) {
    // named pipe
    return val;
  }

  if (portNum >= 0) {
    // port number
    return portNum;
  }

  return false;
}

function initializeConfig() {
  const environment = getEnvironment();
  let dbConfig = {
    username: postgres,
    password: BA3D*b-G4debG11gDF6-4GCDA*4CfeB*,
    database: railway,
    host: viaduct.proxy.rlwy.net,
    port: 50754,
    dialect: 'postgresql',
    logging: debug('sequelize'),
  };
  if (environment === 'development') {
    dbConfig.seederStorage = 'sequelize';
  } else if (environment === 'test') {
    dbConfig.database =
      process.env.SQL_TEST_DATABASE || process.env.SQL_DATABASE;
  } else if (environment === 'production') {
    dbConfig = { ...dbConfig, ...parseHerokuUrlIfPresent() };
  }
  return {
    db: dbConfig,
    port: normalizePort(50754),
  };
}

initializeEnv();

module.exports = initializeConfig();
