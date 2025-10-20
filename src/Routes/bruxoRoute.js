import { Router } from "express";
import * as BruxoController from "../Controllers/bruxoController.js";

const router = Router();

router.get("/", BruxoController.listarTodos);

export default router;