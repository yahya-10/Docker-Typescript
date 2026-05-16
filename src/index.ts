import express from 'express'
import dotenv from 'dotenv'

import { pool } from './database.ts'

const app = express()

dotenv.config()
app.use(express.json())

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database query failed' });
  }
});

app.listen(process.env.PORT, () =>  {
    console.log(`App is running on port ${process.env.PORT}`)
})