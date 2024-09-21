import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

// ----------- Middlewares ----------
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(bodyParser.json());

app.use(
  express.json({
    // limit: "16kb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    // limit: "16kb",
  })
);
app.use(express.static("public"));
app.use(cookieParser());

// ---------- Routes import --------------
import roomRouter from "./routes/room.routes.js";

// --------- Routes declaration ---------
app.use("/api/v1/users/room", roomRouter);

export default app;
