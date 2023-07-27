import express from "express"
import productRouter from "../routes/products.router.js"

const app=express()
const PORT=8090;

app.use(express.json())
app.use(express.urlencoded ({extended:true}))

app.use(express.Router())
app.use('/api', productRouter)




app.listen(PORT,()=>{
    console.log("server is working")
})