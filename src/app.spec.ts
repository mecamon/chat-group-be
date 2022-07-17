import request from "supertest"
import app from "./app"

describe("Test app.ts", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get("/")
    expect(res.body).toEqual({ message: "Allo! Catch-all route." })
    expect(res.statusCode).toEqual(200)
  })
})