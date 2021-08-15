//middleware로 가져온 data error 확인
// & 일반적으로 규격화된 error에 대해 서버가 안죽을 수 있도록 자동화시킨곳
const CustomError = require('../util/customError')

const json = {
    async notFound(req, res, next){
        const error = new CustomError(404, 'notFound')
        next(error)
    },
    async other(err, req, res, next){
        if (err instanceof CustomError){
            res.status(err.status || 500)
            res.json({
                error: {
                    message: err.message
                }
            })
        } else { //db에서 error나올때 등
            res.status(500)
            res.json({
                error: {
                    message: err
                }
            })
        }
    }
}

module.exports = { json }

