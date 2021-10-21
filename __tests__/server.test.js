"use strict";

const server = require("../src/server.js");
const data = require("../src/models/index.js");
const supertest = require("supertest");

const request = supertest(server.app);

beforeAll(async () => {
    await data.db.sync();
});
afterAll(async () => {
    await data.db.drop();
});

describe("testing the server", () => {

    
// cats routes testing

    test("testing a 200 for GET `/cats`", async () => {
        const response = await request.get("/cats");
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([]);
    });

    test("testing a 200 for POST `/cats`", async () => {
        const response = await request.post("/cats").send({
            name: "peaches test",
            breed: "tuxedo test",
            age: 10,
        });

        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual("test");
    });

    test("testing a 200 for GET `/cats/:catsId`", async () => {
        const response = await request.get(`/cats/1`);
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual("test");
    });

    test("testing a 200 for PUT `/cats/:catsId`", async () => {
        const response = await request.put("/cats/1").send({
            name: "new test",
        });
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual("new test");
    });

    test("testing a 200 for DELETE `/cats/:catsId`", async () => {
        const response = await request.delete("/cats/1");
        expect(response.status).toEqual(204);
    });

  // books routes testing

  test("testing a 200 for GET `/books`", async () => {
    const response = await request.get("/books");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
});

test("testing a 200 for POST `/cats`", async () => {
    const response = await request.post("/books").send({
        title: "sample title",
        description: "sample description",
        stars: 4
    });

    expect(response.status).toEqual(200);
    expect(response.body.title).toEqual("test");
});

test("testing a 200 for GET `/books/:booksId`", async () => {
    const response = await request.get(`/books/1`);
    expect(response.status).toEqual(200);
    expect(response.body.title).toEqual("test");
});

test("testing a 200 for PUT `/books/:booksId`", async () => {
    const response = await request.put("/books/1").send({
        title: "new test",
    });
    expect(response.status).toEqual(200);
    expect(response.body.title).toEqual("new test");
});

test("testing a 200 for DELETE `/books/:booksId`", async () => {
    const response = await request.delete("/books/1");
    expect(response.status).toEqual(204);
});

})