require("dotenv").config()
const connectToDatabse = require("./src/config/database")
const app = require("./src/app");
PORT = 8000

connectToDatabse();

app.listen(PORT, ()=>{
    console.log("Server Running on port",PORT)
})