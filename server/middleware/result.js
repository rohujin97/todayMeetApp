//middleware로 가져온 data error 확인
// & 일반적으로 규격화된 error에 대해 서버가 안죽을 수 있도록 자동화시킨곳
const { httpStatus } = require('../config')
const result = require('../util/result')

const json = {
    async notFound(req, res, next) { // 내용 없음
        next(result.error.notFound())
    },
    async result(data, req, res, next){ // 내용 있음
        let code, message, custom, description
        if (data instanceof Error){
            res.status(data.code).send('notFoundError')
            console.log(data)
        }
    }
}



module.exports = { json }

