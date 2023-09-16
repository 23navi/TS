import express, { Request, Response } from "express";
import { router } from "./routers/loginRouter";

const app = express();

app.use(router);

app.listen(3001, () => {
  console.log("Listening to port 3001");
});
