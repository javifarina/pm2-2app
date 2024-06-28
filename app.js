const express = require('express')
const PORT =3000
const app = express()

app.get('/',(req,res)=>{
    res.send({APP:"app-2"})
})

app.listen(PORT, ()=>{
    console.log(`SERVER-1 IS RUN http://localhost:${PORT}`)
})