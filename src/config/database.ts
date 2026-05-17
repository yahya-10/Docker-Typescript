import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

pool.connect((err, client, release) => {
    if(err){
        console.log(`Database crashed, error: ${err}`)
        return
    }
    release()
})