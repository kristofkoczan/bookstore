module.exports = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECT_STRING // Typically in the format: `hostname:port/serviceName`
};