import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Routes from "./routes/route.js";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import process from "process";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

Connection();

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
DefaultData();

const defaultRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, try again later. ",
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://flipkart-clone-front-end.vercel.app/",
    method: ["GET", "POST"],
  })
);
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'https://flipkart-clone-front-end.vercel.app/'"],
      styleSrc: ["'self'", "'https://flipkart-clone-front-end.vercel.app/'"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'", "https://flipkart-clone-front-end.vercel.app/"],
    },
  })
);
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: { action: "deny" },
    noSniff: true,
    xssFilter: true,
    hsts: { maxAge: 31536000, includeSubDomains: true },
  })
);

app.use("/", Routes, defaultRateLimiter);
