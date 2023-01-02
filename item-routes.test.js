const app = require("./app");
const request = require("supertest");

describe("Item routes should work", function () {
  test("Main get route should return all items", async function () {
    const response = await request(app).get("/items");
    expect(response.statusCode).toEqual(200);
    expect(response.body[0]).toEqual({ name: "apple", price: 4.95 });
  });
  test("Adding items should work", async function () {
    const response = await request(app)
      .post("/items")
      .send({ name: "pear", price: 12.95 });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ added: { name: "pear", price: 12.95 } });
  });
  test("Getting specific item should work", async function () {
    const response = await request(app).get("/items/apple");
    expect(response.statusCode).toEqual(200);
    expect(response.body[0]).toEqual({ name: "apple", price: 4.95 });
  });
});
