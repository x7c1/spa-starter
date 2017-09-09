const express = require('express');
const debug = require('debug')('spa-starter:dev');

const app = express();

app.use(express.static('dist'));

app.listen(3000);

debug(`Server is now running at http://localhost:3000.`);
