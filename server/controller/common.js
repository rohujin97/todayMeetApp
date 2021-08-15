//try catch로 error잡고 router를 통해 보낸다음 app.js의 result로 error 넘겨서 처리
const env = require('../config/index')
const database = require('../middleware/pool')
const CustomError = require('../util/customError')

const controller = {
    async ping(req, res, next) {
        try {
            const result = await database.pool() 
            // res.status(200).send({ type: env})
            a.b.c.d = f
        } catch (e) {
            const error = new CustomError(e.code, '잘못된 연산입니다.')
            next(error)
            // next(e)
        }
    },
    async home(res, req, next) {
        try {
            
        } catch (e) {

        }
    }
}

module.exports = controller;