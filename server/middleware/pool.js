const sql = require('mysql2/promise')
const config = require("../config/database")

const pool = async () => {
    try {
        config.getConnection = async() => {
            if(!err){
                console.log('connection success!!')
            }
        }
        console.log('connection success!!')
    } catch (e) {
        console.log(e)
    }
}

module.exports = { pool }