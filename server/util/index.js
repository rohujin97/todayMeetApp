const { enabled } = require('../config/httpStatusCode')

const httpStatus = {}
// 들어온 key에 맞는 code 알려줌
const createHttpStatus = () => enabled.map(async status => await (httpStatus[status.name] = status.code))
// status에 들어갈 key 작성
const createHttpStatusChecker = () => [1, 2, 3, 4, 5].map(async item => await (httpStatus['is'+item+'xx'] = code => Math.floor(code / 100) === item))
createHttpStatus()
createHttpStatusChecker()

module.exports = { httpStatus }