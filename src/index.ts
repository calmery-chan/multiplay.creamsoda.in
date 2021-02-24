import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

// Constants

const origin = ["http://localhost:3000", "https://metaneno.art"];

// Express

const app = express();

app.use(
  cors({
    credentials: true,
    maxAge: 1800,
    methods: ["DELETE", "GET", "POST", "PUT"],
    origin
  })
);

app.listen(process.env.NODE_ENV || 5000);

// Socket.IO

const io = new Server(createServer(app), {
  cors: { origin },
  path: "/a/dream"
});
