import { Router } from "express";
import {
    getProfile,
    getHorario,
    setHorario
} from "../controllers/doctorController.js";
const router = Router();

router.get('/get-horario-doctor', getHorario )
router.post('/set-new-horario-doctor', setHorario)


export default router;