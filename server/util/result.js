const result = { error: {} }
const config = require('../config/httpStatusCode').enabled
const { httpStatus } = require('./index')

result.customError = (code, status, message) => {
    const err = new Error()
    err.code = code; // error code
    err.status = status; // name
    err.message = message; // message
    return err 
}

config.filter(item => httpStatus.is4xx(item.code) || httpStatus.is5xx(item.code)).map(item => {
    result.error[item.name] = (message) => result.customError(item.code, item.name, message === undefined ? item.message : message) // error객체로 하나씩 추가되는중
})

module.exports = result



