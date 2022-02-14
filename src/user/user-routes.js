import { Router } from "express";
import controllers from "./user-controller.js";
const router = Router();


router.get('/',controllers.getOne);
router.get('/all',controllers.getAll);
router.post('/',controllers.createOne);


export default router;