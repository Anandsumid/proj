// const express = require( 'express')
// const util = require('util')
// const fs = require('fs')
// const app = express()
// const port = 3000
// app.get('/users/:userId', (req, res)=>{
//     const user_id= req.params.userId
//     const readFile = util.promisify(fs.readFile)
//     readFile('./user.json')
//     .then((text)=>{
//         const data = JSON.parse(text.toString("utf8"))
//         data.map((dt)=>{
//             if (dt.userId ==user_id){
//                 res.send(dt)
//             }
//         })
//         res.send('user not found')
//     })
// })
// app.listen(port, ()=>{
//     console.log(`host${port}`)
// })
const { json } = require('express');
const express = require ('express');
const util = require('util')
const fs = require('fs')
const port = 3001;
const app = express();
const cors = require('cors')
app.use(express.static('public'))
app.use('/static', express.static('public'))
app.use('/category/', cors(), (req,res)=>{
    const readFile = util.promisify(fs.readFile)
    readFile('./data.json')
    .then((text)=>{
        const data = JSON.parse(text.toString('utf8'))
        res.send(data)
    })
})
app.listen(port, ()=>{
    console.log(`host:${port}`)
})

