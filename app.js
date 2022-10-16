const express = require('express')
const app = express()
const port = 4000

const router = require('./routes')

app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
    res.send("기본페이지")
})

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!')
})
