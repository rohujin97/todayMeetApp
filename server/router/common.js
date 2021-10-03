//경로를 알려주고 pass 하는 곳
const express = require('express')
const router = express.Router()
const common = require('../controller/common')

router.get('/', common.ping);
router.get('/home', common.home);
router.get('/login', common.login);
router.get('/signup', common.signup);
router.get('/private', common.isAuth);

router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});
// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});

module.exports = router;