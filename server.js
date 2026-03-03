const app = require("./src/app");
PORT = 8000

app.listen(PORT, ()=>{
    console.log("Server Running on port",PORT)
})