//try catch로 error잡고 router를 통해 보낸다음 app.js의 result로 error 넘겨서 처리
const controller = {
    async ping({}, {}, next) {
        try {
            next(success.ok({ type: env, version }))
        } catch (e) {
            next(e)//상위계층으로 넘어가겠다
        }
    },
    async home({}, {}, next) {
        try {
            var data = [];
        } catch (e) {

        }
    }
}