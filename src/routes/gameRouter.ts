import express, { Request, Response } from "express";
import gameController from "../controllers/gameController";

const gameRouter = express.Router();

gameRouter.get("/", gameController.list);
gameRouter.get("/:id/ads", gameController.listGameAds);
gameRouter.post("/:id/ads", gameController.createGameAd);

export default gameRouter;
