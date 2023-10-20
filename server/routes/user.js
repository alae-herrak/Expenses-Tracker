import express from "express";

import { createUser, getAllUsernames } from "../controllers/user.js";

const router = express.Router();

router.post("/", createUser);

router.get("/usernames", getAllUsernames);

export default router;
