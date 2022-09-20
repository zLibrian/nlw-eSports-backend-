import express, { Request, Response } from "express";
import adController from "../controllers/adController";

const adRouter = express.Router();

adRouter.get("/:id/discord", adController.getAdDiscord);

export default adRouter;
