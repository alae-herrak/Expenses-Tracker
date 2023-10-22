import express from "express";

import { createUser, getAllUsernames, loginUser } from "../controllers/user.js";

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);

router.get("/usernames", getAllUsernames);

export default router;
