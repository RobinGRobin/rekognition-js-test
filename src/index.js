require('dotenv').config()
const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));

// Routes
app.use("/api", require('./routes/initRoutes'));

// Server start
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});
