const express = require('express')
const fs = require('fs')
const path = require('path')



const offers_json = fs.readFileSync('../../react-app/src/components/home/offers/offers-data.json')
const reviews_json  = fs.readFileSync('../../react-app/src/components/home/reviews/reviews-data.json')

const app = express();

app.use(express.urlencoded({ extended: false }))

app.use(express.static('./html_files'))

app.get('/' , (req , res) => {
  res.sendFile(path.resolve(__dirname , './html_files/home.html'))
})

app.get('/offers' , (req , res) =>{
  res.sendFile(path.resolve(__dirname , './html_files/Offers.html'))
})

app.get('/reviews' , (req , res)=>{
  res.sendFile(path.resolve(__dirname , './html_files/reviews.html'))
})

app.get('/offers/data' , (req , res)=>{
  let data = require('../../react-app/src/components/home/offers/offers-data.json')
  res.json(data);
})

app.get('/reviews/data' , (req , res)=>{
  let data = require('./../../react-app/src/components/home/reviews/reviews-data.json')
  res.json(data);
})




app.post("/offers/data_port", (req, res) => {
  let data = req.body
  let json = JSON.parse(offers_json.toString())
  console.log(json)
  json.push(data)
  console.log(json)
  fs.writeFileSync("../../react-app/src/components/home/offers/offers-data.json", JSON.stringify(json) , function(err){
      if(err){
          return res.send("Not Done")
      }
      return res.send('Done')
  })
  res.send('done')
})



app.post('/reviwes/data_port', (req, res) => {
  let data = req.body
  let json = JSON.parse(reviews_json.toString())

  console.log(json)
  json.push(data)
  console.log(json)
  fs.writeFileSync("./../../react-app/src/components/home/reviews/reviews-data.json", JSON.stringify(json) , function(err){
      if(err){
          return res.send("Not Done")
      }
      return res.send('Done')
  })
  res.send('done')
})




app.listen(5000 , ()=>{
  console.log("Server started on port 5000 ............")
})


