import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get(
  "/profile",
  authMiddleware,
  async (req, res) => {
    res.status(200).json({
      message: "Protected route accessed",
      user: req.user,
    });
  }
);

export default router;