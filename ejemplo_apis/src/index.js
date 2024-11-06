import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";


const app = express();
app.set("port",  process.env.PORT || 9000);
app.use(bodyPaster.json());
app.use("/Piezas", routes);

var corsOptions = {
    origin: "http://localhost:5173",
    method: "GET, POST, OPTIONS, PUT, DELETE",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.get("/", (req, res)=>{
    res.send("<h1>Bienvenido a mi API web</h1>")
});

mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Conectado a MONGODB")
})
.catch((error)=>{
    console.log(`Ocurrio el siguiente error al conectarse ${error.message}`)
});




app.listen(port, ()=> {
    console.log(`El numero del puerto es ${port}`);
});