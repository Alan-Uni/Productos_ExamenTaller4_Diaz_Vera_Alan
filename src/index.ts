import express from "express";
import dotenv from "dotenv";
import productosRoutes from "./routes/productos.routes.ts";


dotenv.config({path:"/home/taller4O/Productos/src/.env"});

const app = express();
const PORT = process.env.PORT || 3001;

//const port = process.env.PORT || 3000; 
app.use("/Productos", productosRoutes)

app.listen(PORT, () => {
  console.log("Mi primer Servicio de Productos! Puerto:",PORT);
});