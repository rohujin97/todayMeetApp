//try catch로 error잡고 router를 통해 보낸다음 app.js의 result로 error 넘겨서 처리
const env = require('../config/index')
const pool = require('../middleware/pool')
const CustomError = require('../util/customError')
const config = require('../config/database')

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js'

const controller = {
    async ping(req, res, next) {
        const query = `SELECT * FROM chat_room`
        try {
            const result = await pool.queryParam(query);
            console.log(result); 
            res.status(200).send({ type: env })
            // a.b.c.d = f
        } catch (e) {
            // const error = new CustomError(e.code, '잘못된 연산입니다.')
            next(e)
        }
    },
    
    async home(res, req, next) {
        try {
            
        } catch (e) {

        }
    },
    async chatList(res, req, next){

    },
    async login(req, res, next){
        // checks if email exists
        User.findOne({ where : {
            user_email: req.body.email, 
        }})
        .then(dbUser => {
            if (!dbUser) {
                return res.status(404).json({message: "user not found"});
            } else {
                // password hash
                bcrypt.compare(req.body.passwd, dbUser.user_passwd, (err, compareRes) => {
                    if (err) { // error while comparing
                        res.status(502).json({message: "error while checking user password"});
                    } else if (compareRes) { // password match
                        const token = jwt.sign({ user_email: req.body.email }, 'secret', { expiresIn: '1h' });
                        res.status(200).json({message: "user logged in", "token": token});
                    } else { // password doesnt match
                        res.status(401).json({message: "invalid credentials"});
                    };
                });
            };
        })
        .catch(err => {
            console.log('error', err);
        });
    },
    async signup(req, res, next){
        // checks if email already exists
        User.findOne({ where : {
            user_email: req.body.email, 
        }})
        .then(dbUser => {
            if (dbUser) {
                return res.status(409).json({message: "email already exists"});
            } else if (req.body.email && req.body.passwd) {
                // password hash
                bcrypt.hash(req.body.passwd, 12, (err, passwordHash) => {
                    if (err) {
                        return res.status(500).json({message: "couldnt hash the password"}); 
                    } else if (passwordHash) {
                        return User.create(({
                            user_email: req.body.email,
                            user_phone: req.body.phone,
                            user_passwd: passwordHash,
                        }))
                        .then(() => {
                            res.status(200).json({message: "user created"});
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(502).json({message: "error while creating the user"});
                        });
                    };
                });
            } else if (!req.body.passwd) {
                return res.status(400).json({message: "password not provided"});
            } else if (!req.body.email) {
                return res.status(400).json({message: "email not provided"});
            };
        })
        .catch(err => {
            console.log('error', err);
        });
    },
}

module.exports = controller;