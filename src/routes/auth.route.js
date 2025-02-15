import express from "express";
import {
  createUserHandler,
  logInHandler,
  verifyUserHandler,
  resetPasswordHandler,
  updatePasswordHandler,
  resendOtpHandler,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-up", createUserHandler);
router.post("/verify-user", verifyUserHandler);
router.post("/reset-password", resetPasswordHandler);
router.put("/update-password", updatePasswordHandler);
router.post("/sign-in", logInHandler);
router.post("/resend-otp", resendOtpHandler);

export default router;
