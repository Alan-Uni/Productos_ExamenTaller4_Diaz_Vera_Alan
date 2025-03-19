import { Router } from "express";
import {getAll, insertProducto, deleteProducto, updateProducto} from "../controllers/productos.controller.ts";

const router = Router();

router.get("/all", getAll)
router.post("/insertProducto", insertProducto)
router.put("/updateProducto/:id", updateProducto);

router.delete("/deleteProducto/:id", deleteProducto);
export default router;