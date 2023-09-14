//creacion de modulos
const express = require('express')
//se crea instancia para usarla
const app= express()

//los callback pueden recibir tres parametros= req(recibe parametros de la URL) y res(funcion que permite dar respuesta)
app.get('/',(request, response)=>{
    response.send("Hello GET, i'm Miryam")
})

app.post('/',(request, response)=>{
    response.send("Hello POST, i'm Miryam")
})

app.put('/',(request, response)=>{
    response.send("Hello PUT, i'm Miryam")
})

app.patch('/',(request, response)=>{
    response.send("Hello PATCH, i'm Miryam")
})

app.delete('/',(request, response)=>{
    response.send("Hello DELETE, i'm Miryam")
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