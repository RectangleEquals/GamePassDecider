const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
      msg: 'Success'
    }).status(200);
});

module.exports = router;