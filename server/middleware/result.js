//middleware로 가져온 data error 확인
// & 일반적으로 규격화된 error에 대해 서버가 안죽을 수 있도록 자동화시킨곳
const CustomError = require('../util/customError')

module.exports = (err, req, res, next) => {
    if (err instanceof CustomError){
        return res.status(err.code).json(err)
    }
    console.log(err)
    return res.status(500).json(JSON.parse(err))
}

