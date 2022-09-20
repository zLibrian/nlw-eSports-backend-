import express from "express";
import cors from "cors";

import adRouter from "./routes/adRouter";
import gameRouter from "./routes/gameRouter";

const PORT: string = process.env.PORT || "3000";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/ads", adRouter);
app.use("/games", gameRouter);

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
