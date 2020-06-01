import express from 'express'

const port =  3333
const app = express()

app.get('/users', (request, response) => {
  console.log('Users list')
  
  response.json([
    'Diego',
    'Cleiton',
    'Robson'
  ])
})

app.listen(port)