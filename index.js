const express = require('express');
require('dotenv').config();

const app = express();
const hbs = require('express-handlebars');

app.set('view engine', 'handlebars');
app.engine('handlebars', hbs({ layoutsDir: __dirname + '/views/layouts',}));

app.get('/', require("./routes/primeRouter"));


const appPort = process.env.PORT || 4000;
app.listen(appPort, () => console.log(`Prime Multiplier Started At ${appPort}`));

