const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const db_connection = mongoose.connection;

db_connection.on('error', console.error.bind(console, 'Connection error'));
db_connection.once('open', () => {
  console.log('Database Connection established!');
});

module.exports = db_connection;
