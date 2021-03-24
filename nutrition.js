const nutrx = require('nutritionix-api')
require("dotenv").config()

nutrx.init(process.env.APPID, process.env.APIKEY);
let search = nutrx.natural.search("McDonald's Double Cheeseburger")
search.then(result => 
  console.log(String(result["foods"]["nf_sugars"]) + String(result["foods"]["nf_calories"])))
  .catch("Something goofed")

