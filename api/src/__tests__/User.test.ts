import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "../app";

import createConnection from "../database";

describe("Users", () => {
  // Before all is create database connection and given run migrations
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to create an new user", async () => {
    const response = await request(app).post("/users").send({
      name: "User Example",
      email: "user@example.com",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id"); // checks if body have id property
  });

  it("Should not be able to create an user with exists email", async () => {
    const response = await request(app).post("/users").send({
      name: "User Example",
      email: "user@example.com",
    });

    expect(response.status).toBe(400);
  });
});
