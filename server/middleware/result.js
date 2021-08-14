//middleware로 가져온 data error 확인
// & 일반적으로 규격화된 error에 대해 서버가 안죽을 수 있도록 자동화시킨곳
const { httpStatus } = require('../util')
const result = require('../util/result')

const json = {
    async notFound(req, res, next) { // 내용 없음
        next(result.error.notFound())
    },
    async result(data, req, res, next){ // 내용 있음
        let code, name, message, description
        if (data instanceof Error){
            code = data.code || httpStatus.internalServerError
            name = data.status
            message = data.message
            description = data.stack //error가 어떤 순서로 어떤 줄과 파일에서 어떤 인수로 호출되었는지 추적
        } else {
            code = httpStatus.internalServerError
            message = `${data}`
            description = `${data}`
        }
        res.status(code).json({ code, name, message })
        console.log(description)
    }
}



module.exports = { json }

