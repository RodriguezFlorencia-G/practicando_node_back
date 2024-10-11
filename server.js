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

app.get('/productos', (req, res) => {
    const productos= [ 
      {
        nombre: "lavarropas",
        precio: "30000.-"
      },
      {
        nombre: "camara",
        precio: "30000.-"
      },
      {
        nombre: "queso",
        precio: "30000.-"
      }
    ]
      res.json(productos)
  })
//! arranque, serv
app.listen(PORT, (err) => {
    if (err) throw new Error(`No se pudo levantar el servidor -> ${err}`)
    console.log(`Aplicación arrancó -> http://localhost:${PORT}`)
})
