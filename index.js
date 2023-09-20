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
//OTRO METODO USANDO QUERY
//http://localhost:3000/login?user=david&password=123
app.get('/login', (req, res) => {
    const {user, password} = req.query
    if(!user || !password){
        res.json({msg: "You nedd to provide <user> and <password> params"})
    }

    if(user === 'david' && password === '123'){
      res.status(400).json({msg: 'Sign In succesfully'})
      return  
    }
    res.status(404).json({msg: 'Wrong user or password'})
})

app.post('/', (req, res) => { //endpoint
    res.json({msg:'Hola POST'})
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