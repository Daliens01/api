const express = require("express")
const  mongoose  = require("./src/utils/DBConection")
const app = express()
const port = process.env.PORT || 4000
const userRoutes = require("./src/routes/options")
const cors = require("cors")
app.use(cors())
//middleware
app.use(express.json())
app.use("/api", userRoutes)
  
//rutas
app.get("/", (req, res) =>{
    res.send("Wellcome to Api-Esi-List")
})

mongoose.DBConection()

app.listen(port, ()=> console.log("PORT YOU'RE USING IS:", port))