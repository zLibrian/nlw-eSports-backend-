import { Request, Response } from "express";
import dbConnection from "../database/dbConnection";
import convertTime from "../utils/ConvertTime";

const gameController = {
  list: async (_req: Request, res: Response) => {
    const games = await dbConnection.game.findMany({
      include: {
        _count: {
          select: {
            ads: true,
          },
        },
      },
    });
    return res.status(200).json(games);
  },
  listGameAds: async (req: Request, res: Response) => {
    const gameId = req.params.id;

    const ads = await dbConnection.ad.findMany({
      where: { gameId },
      select: {
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        hourEnd: true,
      },
    });

    const mappedAd = ads.map((ad) => ({
      ...ad,
      weekDays: ad.weekDays.split(","),
      hourStart: convertTime.minutesToHour(ad.hourStart),
      hourEnd: convertTime.minutesToHour(ad.hourEnd),
    }));
    return res.status(200).json(mappedAd);
  },
  createGameAd: async (req: Request, res: Response) => {
    const gameId = req.params.id;
    const {
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourStart,
      hourEnd,
      useVoiceChannel,
    } = req.body;
    const created = await dbConnection.ad.create({
      data: {
        gameId,
        name,
        yearsPlaying,
        discord,
        weekDays: weekDays.join(","),
        hourStart: convertTime.hourToMinutes(hourStart),
        hourEnd: convertTime.hourToMinutes(hourEnd),
        useVoiceChannel: useVoiceChannel,
      },
    });
    return res.status(201).json(created);
  },
};

export default gameController;
