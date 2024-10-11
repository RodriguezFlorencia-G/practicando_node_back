import express from 'express'
import 'dotenv/config'
import cors from 'cors'

//! const/var
const app=express()
const PORT=process.env.PORT 
const ORIGEN= process.env.ORIGEN
//! Middlewere
app.use(express.static('./public'))
app.use(express.json()) 
const corsOptions={
    origin:ORIGEN,
    optionsSuccessStatus:200
}
app.use(cors(corsOptions))
//! rutas
app.get('/', (req, res) => {
  res.send('ok')
})
//! arranque, serv
app.listen(PORT, (err) => {
    if (err) throw new Error(`No se pudo levantar el servidor -> ${err}`)
    console.log(`Aplicación arrancó -> http://localhost:${PORT}`)
})
