const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    const data = {
        name: 'Bren',
        fecha: '12-02-2023'
    };
    res.json(data);
});  

module.exports = router;