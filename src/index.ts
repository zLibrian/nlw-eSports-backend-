import express from 'express'
const app = express()

app.get('/test', (_req, res)=> {
  return res.status(200).json({ message: "Teste" })
})

app.listen(3000)