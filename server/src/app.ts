import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.status(200).json({
    status: "running",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected",
    timestamp: new Date().toISOString(),
  });
});

export default app;