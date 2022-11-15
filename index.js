//Actividad 1
/* const HTTP = require('http');
let moment = require('moment')
const PORT = 3001;

const SERVER = HTTP.createServer((request, response) => {
    let hora = moment().hour();
    if(hora >= 6 && hora <= 12){
        response.end(`Buenos dias, Son las ${hora}`)
    } else if(hora >= 13 && hora <= 19){
        response.end(`Buenos tardes, Son las ${hora}`)
    } else {
        response.end(`Buenos noches, Son las ${hora}`)
    }
    
});

let connected_server = SERVER.listen(PORT, () => { console.log(`Server on http://localhost:${PORT}`)})

connected_server.on('error', error => console.log(error)) */