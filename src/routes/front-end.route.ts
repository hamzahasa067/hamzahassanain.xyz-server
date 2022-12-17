import { Router } from "express";
import {getAllData} from "../controllers/front-end.controller"
const router =  Router();

router.get("/", getAllData)

export default router;
