//try catch로 error잡고 router를 통해 보낸다음 app.js의 result로 error 넘겨서 처리
// const env = require('../config/index')

const controller = {
    async ping(req, res, next) {
        try {
            // res.status(200).send({ version: version, server_type: config.type });
            res.status(200).send({ type: env })
        } catch (e) {
            next(e)
            // res.status(503).send({ message: "일시적인 서버 오류입니다."});
            // console.log(e)
        }
    },
    async home(res, req, next) {
        try {
            
        } catch (e) {
            res.status(500).send({ message: "something broken!"});
        }
    }
}

module.exports = controller;