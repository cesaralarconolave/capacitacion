/* const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./static/index.html')
    read.pipe(res)
})


server.listen(3000)
console.log(`Server on port $`) */

const express = require ('express')

const app = express()

/*
app.get('/', (req, res) =>{
    /* res.sendFile('./static/index.html',{
        root: __dirname
    }) --/*
    res.send('Hello world')
})

app.get('/about', (req, res) =>{
    res.send('Acerca de')
})

app.get('/weather', (req, res) =>{
    res.send('The current weather is Nice')
})

app.use((req, res)=>{
    res.status(404).send('No se encontró la pagina')
})
*/

/*
app.get('/products', (req, res) =>{
    res.send('Lista de Productos')
})

app.post('/products', (req, res) =>{
    res.send('creando productos')
})

app.put('/products', (req, res) =>{
    res.send('actualizando productos')
})

app.delete('/products', (req, res) =>{
    res.send('eliminando productos')
})

app.patch('/products', (req, res) =>{
    res.send('actualizando una parte del producto')
})
*/

app.get('/', (req, res)=>{
    res.send('hello World')
})

app.get('/miarchivo', (req, res)=>{
    res.send('hello World')
})


app.listen(3000)
console.log(`Server on port ${3000}`)