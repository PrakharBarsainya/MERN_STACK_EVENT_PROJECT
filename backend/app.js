import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
path: path.join(__dirname, "config", "config.env"),
});

const app = express();

app.use(
cors({
origin: process.env.FRONTEND_URL || true,
methods: ["GET", "POST"],
credentials: true,
})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);

// Serve React frontend
const frontendPath = path.join(__dirname, "../frontend/dist");

app.use(express.static(frontendPath));

// Handle frontend routes
app.get("*", (req, res) => {
res.sendFile(path.join(frontendPath, "index.html"));
});

dbConnection();

export default app;