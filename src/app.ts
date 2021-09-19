import cors from 'cors';
import express from "express";
import path from "path";
import { loadControllerOffers } from "./controllers/users";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cors configuration
const allowedOrigins = ['http://localhost:8080'];

const CorsOptions: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(CorsOptions));


app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

loadControllerOffers(app);

export default app;
