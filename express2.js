//Actividad 3
let express = require('express');
let moment = require('moment');
const PORT = 3001;
let app = express()
let contador_visitas = 0;

app.get('/', (req, res, next) => {
    res.send(`<h1 style="color:blue">Maga es la mejor<h1>`)
})

app.get('/visitas', (req, res, next) => {
    contador_visitas++
    res.send(`Total visitas ${contador_visitas}`)
})

app.get('/fyh', (req, res, next) => {
    let hora = moment().format('L')
    res.json({hora})
})

app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`))