import request from "supertest";
import app from "./app";

describe("GET /budget", () => {
  let createdDataId: string;
  it("should CREATE a new data entry and respond with 201 status code", async () => {
    const response = await request(app).post("/budget").send("");
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    createdDataId = response.body.id;
  });

  it("should GET the created data entry and respond with 200 status code", async () => {
    const response = await request(app).get(`/budget/${createdDataId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", createdDataId);
  });

  it("should UPDATE the created data entry and respond with 200 status code", async () => {
    const response = await request(app)
      .patch(`/budget/${createdDataId}`)
      .send("");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", createdDataId);
  });

  it("should DELETE the created data entry", async () => {
    const response = await request(app).delete(`/budget/${createdDataId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", createdDataId);
    const deletedDataResponse = await request(app).get(
      `/budget/${createdDataId}`
    );
    expect(deletedDataResponse.status).toBe(404);
  });
});
