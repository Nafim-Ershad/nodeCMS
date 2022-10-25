const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.status(200).render('index');

    next();
});


module.exports = router;