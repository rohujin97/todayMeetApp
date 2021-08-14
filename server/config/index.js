const dotEnv = require('dotenv')
const cors = require('cors')

if (process.env.NODE_ENV !== 'production') dotEnv.config() // .env에 입력한 환경변수 불러오기

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    middleware: {
        cors: true, // 다른 서버 자원 요청시 사용
        morgan: `:date[iso][:status][:method] :url :response-time ms :res[content-length] bytes`, // iso: 공통 ISO 날짜/시간 포맷
        result: `json`,
    },
}