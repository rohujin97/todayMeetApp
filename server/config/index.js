const dotEnv = require('dotenv')
const cors = require('cors')

if (process.env.NODE_ENV !== 'production') dotEnv.config() // .env에 입력한 환경변수 불러오기

module.exports = {
    port: process.env.PORT,
    middleware: {
        cors: true,
        result: `message`,
    }
}