const express = require('express');
require('dotenv').config();

const app = express();
const hbs = require('express-handlebars');
const primeController = require('./controller/primeController');

app.set('view engine', 'handlebars');
app.engine('handlebars', hbs({ layoutsDir: __dirname + '/views/layouts',}));

app.get('/', (req, res) => {
    const bucketSize = req.query.primeNumbers || 10;
    if(isNaN(bucketSize))
    {
        return res.status(400).json({ message: "primeNumbers must be a number"})
    }

    const primesMultiples = primeController.generatePrimeMultiples(bucketSize * 1);
    return res.render('main', {layout : 'index', data:primesMultiples});
});

app.listen(process.env.PORT, () => console.log(`Prime Multiplier Started At ${process.env.PORT}`));

