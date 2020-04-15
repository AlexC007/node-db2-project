const express = require('express');

const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

server.get('/api/cars',async (req,res)=>{
  try{
      const cars= await db('cars');
      res.status(200).json(cars);
  } catch (err){
    res.status(500).json({errorMessage: "No cars could be found"})
  }
})



server.post('/api/cars',async (req, res) => {
    const data = req.body;
    try {
        const cars = await db('cars').insert(data)
        res.status(200).json(cars)
    } catch (err){
        res.status(500).json({errorMessage: "Could Not POST"})
    }
});

module.exports = server;