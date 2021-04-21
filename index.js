const express = require('express');
require('dotenv').config();

const app = express();
const hbs = require('express-handlebars');
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs({ layoutsDir: __dirname + '/views/layouts',}));


app.use(express.static('public'))
app.get('/', (req, res) => res.render('main', {layout : 'index'}));

app.listen(process.env.PORT, () => console.log(`Prime Multiplier Started At ${process.env.PORT}`));

