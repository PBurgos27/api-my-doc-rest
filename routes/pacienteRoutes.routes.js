import { Router } from "express";
import {
  getProfile,
  getCitasSeparadas,
  getCitasDisponibles,
  getCitasAtendidas,
  changeProfile,
  getCitasSeparadaById,
  getCitasDisponibleById,
  setCitaSeparada,
  getReclamos
} from "../controllers/pacienteController.js";

const router = Router();

router.get("/profile/:id", getProfile);
router.put("/profile", changeProfile);

router.post("/separar-cita", setCitaSeparada);

router.get("/citas-separadas", getCitasSeparadas);
router.get("/citas-separadas/:id", getCitasSeparadaById);

router.get("/citas-disponibles", getCitasDisponibles);
router.get("/citas-disponibles/:id", getCitasDisponibleById);

router.get("/citas-atendidas/:id", getCitasAtendidas);

router.get("/reclamos/:id", getReclamos);

export default router