const express = require('express');
const router = express.Router({ mergeParams: true });
const primeController = require('../controller/primeController');

router.get('/', (request, response) => {
    try{
        const bucketSize = request.query.primeNumbers || 10;
        if(isNaN(bucketSize))
        {
            return response.status(400).json({ message: "primeNumbers must be a number"})
        }

        const primesMultiples = primeController.generatePrimeMultiples(bucketSize * 1);
        return response.render('main', { layout : 'index', data : primesMultiples, bucketSize });
    }catch(error){
        console.log(error)
        return response.status(400).json({ message: 'Something went wrong'})
    }
})

module.exports = router;