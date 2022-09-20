import dbConnection from "../database/dbConnection";

const adService = {
  getAdDiscord: async (adId: string) => {
    const ads = await dbConnection.ad.findUniqueOrThrow({
      where: { id: adId },
      select: { discord: true, name: true },
    });
    return ads.discord;
  },
};

export default adService;
