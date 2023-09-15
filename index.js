//creacion de modulos
const express = require('express')
//se crea instancia para usarla
const app= express()

//los callback pueden recibir tres parametros= req(recibe parametros de la URL) y res(funcion que permite dar respuesta)
app.get('/',(request, response)=>{
    //response.send("Hello GET, i'm Miryam")
    //respuesta en formato JSON
    response.json({msg: "Hello GET, I'm Miryam"})
})
//los navegadores solo soportan GET para utilizar estos metodos se necesita un emulador
app.post('/',(request, response)=>{
    response.json({msg: "Hello POST, I'm Miryam"})
})

app.put('/',(request, response)=>{
    response.json({msg: "Hello PUT, I'm Miryam"})
})

app.patch('/',(request, response)=>{
    response.json({msg: "Hello PATCH, I'm Miryam"})
})

app.delete('/',(request, response)=>{
    response.json({msg: "Hello DELETE, I'm Miryam"})
})

/**
 * FUNCIONALIDAD 
 * 
 */
//se coloca un callback aunque no es necesario 
//http;//localhost:3000

app.listen(3000,() => {
    console.log('Listening on port 3000')
})