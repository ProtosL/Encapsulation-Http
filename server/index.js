var express = require('express')
const app = express()
const port = 3000

var errorData = {
    result: false,
    error_msg: 'fail',
    data: ''
}

var successData = {
    result: true,
    error_msg: '',
    data: 'hello world'
}

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") { /*让options请求快速返回*/
        res.sendStatus(200);
    }
    else next();
})

app.post('/normal', (req, res) => {
    res.send(successData)
})

app.post('/slow', (req, res) => {
    setTimeout(() => {
        res.send(successData)
    }, 3000)
})

app.post('/error-data', (req, res) => {
    res.send(errorData)
})

app.post('/error-code', (req, res) => {
    res.status(400).send(errorData)
})

app.post('/code-403', (req, res) => {
    res.status(403).send(errorData)
})

app.post('/code-401', (req, res) => {
    res.status(401).send(errorData)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))