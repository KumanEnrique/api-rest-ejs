const express = require("express")
const path = require('path')
const app = express()
const morgan = require("morgan")

//settings
app.set('port',process.env.PORT || 3000)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan("dev"))

//routes
app.get('/',(req,res)=>{
    res.send('hola task')
    // res.send('reaprendiendo ejs')
})
app.use(require('./routes/index'))

//starting server
app.listen(app.get('port'),()=>{
    console.log(`server on http://localhost:${app.get('port')}`)
})