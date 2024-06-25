const express = require('express')
const { router } = require('./routes/user.route')
const { connection } = require('./config/db')
const app = express()
app.use(express.json())

app.use(router)
app.listen(8090,()=>{
    console.log('port running on 8090');
    connection()
})