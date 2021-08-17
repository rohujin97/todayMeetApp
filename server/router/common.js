//경로를 알려주고 pass 하는 곳
const express = require('express')
const router = express.Router()
const common = require('../controller/common')

router.get('/', common.ping)
router.get('/home', (res, req) =>{
    res.send("this is home")
})

module.exports = router