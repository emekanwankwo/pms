require('dotenv').config();
require('./settings/connect');
const app = require('./settings/config');

// Configure port
const port = process.env.PORT || 8080;

// Listen to port
app.listen(port);
console.log(`Server is running on http://localhost:${port}`);
