import { Router } from "express";
import {
    getProfesionales,
    getProfesionalesById,
    getSolicitudes,
    getSolicitudesById,
    updateSolicitud,
    getQuejasPacientes,
    getQuejasPacientesById,
    updateQueja,
    getPacientes,
    getPacienteById,
    setEspecialidad,
    getEspecialidades
} from "../controllers/adminController.js";
const router = Router();

router.get("/especialidades-lista",getEspecialidades)
router.post("/especialidades-lista",setEspecialidad)

router.get("/profesionales-lista-completa",getProfesionales)
router.get("/profesionales-lista-completa-data/:id",getProfesionalesById)

router.get("/solicitudes-lista-completa",getSolicitudes)
router.get("/solicitudes-lista-completa-data/:id",getSolicitudesById)
router.post("/solicitudes-lista-completa-data",updateSolicitud)

router.get("/quejas-lista-completa",getQuejasPacientes)
router.get("/quejas-lista-completa-data/:id",getQuejasPacientesById)
router.post("/quejas-lista-completa-data",updateQueja)

router.get("/pacientes-lista-completa",getPacientes)
router.get("/pacientes-lista-completa-data/:id",getPacienteById)

export default router
