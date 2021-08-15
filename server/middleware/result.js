//middleware로 가져온 data error 확인
// & 일반적으로 규격화된 error에 대해 서버가 안죽을 수 있도록 자동화시킨곳
const CustomError = require('../util/customError')

const json = {
    async notFound(req, res, next){
        const error = new CustomError(404, 'notFound')
        next(error)
    },
    async other(err, req, res, next){
        let code, message, stack
        if (err instanceof CustomError){
            code = err.status || 500
            message = err.message
            stack = err.stack 
        } else { //db에서 error나올때 등 CustomError가 아닌것들 처리
            code = 500
            message = err
            stack = err
        }
        console.log(stack)
        res.status(code).json({ code, message })
    }
}

module.exports = { json }

