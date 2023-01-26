const router = require('express').Router();

router.get('/', (req, res) => {
    res.redirect('/login/auth');
});

module.exports = router;