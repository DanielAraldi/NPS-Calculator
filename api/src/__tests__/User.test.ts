import request from "supertest";
import { app } from "../app";

import createConnection from "../database";

describe("Users", async () => {
  // Before all is create database connection and given run migrations
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      name: "User Example",
      email: "user@example.com",
    });

    expect(response.status).toBe(201);
  });
});
