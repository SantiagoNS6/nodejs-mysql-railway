import express from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";

const app = express()


app.get('/', async (req, res)=>{ 
    const [result] = await pool.query('SELECT * FROM users')
    res.json(result)
})

app.get('/ping', async (req,res)=>{
    const [result] = await pool.query('SELECT 1+1')
    res.json(result[0])
})

app.get('/create', async (req,res)=>{
    const result = await pool.query('INSERT INTO users(name) VALUES("Santiago")')
    res.json(result)
})



app.listen(PORT)

console.log('escuando por el puerto', PORT)