const express = require('express')
const app = express()
const path = require('path')

//Rutas
app.use(require('./routes/index_routes'))

//Ruta Static Files
app.use(express.static(path.join(__dirname,'../public')))

app.use((req, res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.listen(3000,()=>{
    console.log('Servidor a la espera de conexiones')
})