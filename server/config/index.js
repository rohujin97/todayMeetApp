const dotEnv = require('dotenv')

if (process.env.NODE_ENV !== 'production') dotEnv.config() // 환경변수 불러오기

module.exports = {
    port: process.env.PORT
}