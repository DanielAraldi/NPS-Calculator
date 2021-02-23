import "reflect-metadata";
import express from "express";
import "./database";

const app = express();

app.get("/", (request, response) => response.json({ message: "Hello World!" }));

app.post("/", (request, response) =>
  response.json({ message: "Os dados foram salvos com sucesso!" })
);

app.listen(3333, () => console.log("Server is running!"));
