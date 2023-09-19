const express = require('express')

const app = express()


// http://localhost:3000/user/group
app.get('/:user/:password', (req, res) => {
    const {user, password} = req.params
    if (user==='david' && password==='123'){
        res.json({msg: 'inicio de sesion exitoso'})
        return
    }
    res.json({msg: 'Fallo en el usuario o contraseña'})
})

app.post('/', (request, response) => {
    response.json({msg:'Hola POST'})
})

app.put('/', (request, response) => {
    response.json("Hola PUT")
})

app.patch('/', (request, response) => {
    response.json("Hola PATCH")
})

app.delete('/', (request, response) => {
    response.json("Hola DELETE")
})

//EN UN NAVEGADOR SOLAMENTE ES SOPORTABLE EL GET
//Instalar postman o Insomnia



/*
*
*FUNCIONALIDAD
*
*/
//http://localhost:3001
app.listen(3000, () =>{
    console.log('listening on port 3000')
})