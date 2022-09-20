import { Request, Response } from "express";
import adService from "../services/adService";

const adController = {
  getAdDiscord: async (req: Request, res: Response) => {
    const adId = req.params.id;
    const adDiscord = await adService.getAdDiscord(adId);
    return res.status(200).json({ discord: adDiscord });
  },
};

export default adController;
