//try catch로 error잡고 router를 통해 보낸다음 app.js의 result로 error 넘겨서 처리
const env = require('../config/index')
const database = require('../middleware/pool')

const controller = {
    async ping(req, res, next) {
        try {
            const result = await database.pool() 
            res.status(200).send({ type: env })
        } catch (e) {
            next(e)
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