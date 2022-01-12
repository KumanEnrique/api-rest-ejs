const {Router} = require('express')
const router = Router();
const tasks = [{title:"salir----------------",description:"salir a comer a la zona hotelera"},{title:"2",description:"salir a comer a la zona hotelera"},{title:"3333",description:"salir a comer a la zona hotelera"},{title:"comer",description:"salir hotelera"}]

router.get('/task',(req,res)=>{
    res.render('index',{tasks})
})
router.get('/add',(req,res)=>{
    res.render('entry')
})
router.post('/add',(req,res)=>{
    // console.log(req.body)
    tasks.push(req.body)
    res.redirect('/task')
})
router.get('/delete/:id',(req,res)=>{
    const id = req.params.id
    tasks.splice(id,1)
    res.redirect("/task")
})
router.put('/task',(req,res)=>{})

module.exports = router