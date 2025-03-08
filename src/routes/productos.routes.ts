import { Router } from "express";
import {getAll} from "../controllers/productos.controller.ts";

const router = Router();

router.get("/all", getAll)

export default router;