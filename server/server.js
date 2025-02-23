import express from 'express'
import "dotenv/config"
import connectDB from './config/mongodb.js'
import hotelRouter from './routes/hotelRoutes.js'
import cors from 'cors'


const app = express()
const port = process.env.PORT || 8000
connectDB()

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.send("API WORKING FINE")
})

app.use("/api/partner",hotelRouter)

app.listen(port, ()=>console.log(`app running on ${port}...`))

