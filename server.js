const express = require('express')
const app = express()
const port = 3001
const path = require('path')
app.use(express.json())
app.use(express.static('public'))


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'./public/index.html'))
// })
app.get('/notes',(req,res)=>{
  res.sendFile(path.join(__dirname,'./public/notes.html'))
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})