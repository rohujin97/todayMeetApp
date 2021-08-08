//middleware로 가져온 data error 확인
// & 일반적으로 규격화된 error에 대해 서버가 안죽을 수 있도록 자동화시킨곳
const { httpStatus } = require('../config/httpStatusCode')
const errorParms = req => {
    console.info("### Error API Parameters List ###")
}

const message = {
    async notFound(req, res, next) { // 내용 없음
        next(result.error.NotFound())
    },
    async result(data, req, res, next){ // 내용 있음
        res.status(500).json(`error 발생`)
    }
}

module.exports = { message }

