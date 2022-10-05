const express = require('express')
const fs = require('fs')
const path = require('path')



let offers_json = fs.readFileSync('./../../react-app/src/components/home/offers/offers-data.json')
let reviews_json  = fs.readFileSync('../../react-app/src/components/home/reviews/reviews-data.json')

let offers_data = require('./../../react-app/src/components/home/offers/offers-data.json')
let reviews_data = require('./../../react-app/src/components/home/reviews/reviews-data.json')

let offers_update = []
let reviews_update = []


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
  res.json(offers_data);
})

app.get('/reviews/data' , (req , res)=>{
  res.json(reviews_data.data);
})

app.get('/offers/update_data' , (req , res)=>{
  res.json(offers_update);
})

app.get('/reviews/update_data' , (req , res)=>{
  res.json(reviews_update);
})



app.post("/offers/data_port", (req, res ) => {
  let data = req.body
  let json = JSON.parse(offers_json.toString())
  
  json.push(data)

  fs.writeFileSync("./../../react-app/src/components/home/offers/offers-data.json", JSON.stringify(json) , function(err){
      if(err){
          return console.log(err)
      }
      return true;
    })
    offers_json = JSON.stringify(json)
    offers_data = json
    offers_update.push(data)
    res.redirect("/offers")
})



app.post('/reviews/data_port', (req, res ) => {
  let data = req.body
  let json = JSON.parse(reviews_json.toString())
  
  json.data.push(data)
  
  fs.writeFileSync("./../../react-app/src/components/home/reviews/reviews-data.json", JSON.stringify(json) , function(err){
      if(err){
          return console.log(err)
      }
      return true;
    })
    reviews_json = JSON.stringify(json)
    reviews_data = json
    reviews_update.push(data)
    res.redirect('/reviews')
})




app.listen(5000 , ()=>{
  console.log("Server started on port 5000 ............")
})


