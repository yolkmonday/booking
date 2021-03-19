const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const app = express()
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'booking'
    }
  });
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'welcome'
    })
})

// register
app.post('/user/register', (req,res) => {

    knex('users').insert({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,10)
    }).catch(e=> {
        res.json({
            success: false,
            message: 'data not saved'
        })
    }).then(r=> {
        res.json({
            success: true,
            message: 'data saved'
        })
    })
})

// login
app.post('/user/login', (req,res)=> {
    var email = req.body.email
    var password = req.body.password
    var userData = ''
    knex('users').where('email',email).first().then(r=> {
        userData = r
        
        bcrypt.compare(password,r.password).then(r=> {
            if(r) {
                token = jwt.sign({
                    id: userData.id,
                    email: userData.email,
                    name: userData.name
                },'421oyx421')


                knex('users')
                .where('id', userData.id)
                .update({
                    token: token
                })

                res.json({
                    success:true,
                    data: {
                        name: userData.name,
                        email: userData.email
                    },
                    token: token
                })
            } else {
                res.json({
                    success: false,
                    message: 'Wrong email or password'
                })
            }
        })
    })
})

//user info
app.get('/user/info', (req,res,next) => {
    var token = req.headers.authorization
    var decoded = jwt.verify(token, '421oyx421')
    res.json({
        data: decoded
    })
})

app.listen('3000')
