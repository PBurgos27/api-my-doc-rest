import { Router } from "express";
import {
  authEmailWithPass,
  onAuthUserVerify
} from "../controllers/authController.js";

const router = Router();

router.post("/login", authEmailWithPass);
router.post("/verify-login-auth", onAuthUserVerify);

export default router;