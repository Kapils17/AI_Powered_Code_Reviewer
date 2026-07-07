require('dotenv').config();

const app = require('./src/app');

app.get("/", (req , res) => {
    res.send("Server is Working Just fine");
})

app.listen(3000 , ()=>{
   console.log("Server is running http://localhost:3000/");
})