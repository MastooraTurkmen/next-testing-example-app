const request = require('supertest');
const app = require('./app');

describe('POST /user', () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app).post("/user").send({
            username: "john",
            password: "john123"
        });
        expect(response.statusCode).toBe(200);
    });

    test("should specify json in the content type header", async () => {
        const response = await request(app).post("/user").send({
            username: "john",
            password: "john123"
        });
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    });

    test("response has userId", async () => {
        const response = await request(app).post("/user").send({
            username: "john",
            password: "john123"
        });
        expect(response.body.userId).toBeDefined();
    });


    describe("when password and username is missing", () => {
        test("should respond with a status code of 400", async () => {
            const bodyData = [
                { username: "john" },
                { password: "john123" },
                {}
            ]

            for (const body of bodyData) {
                const response = await request(app).post("/user").send(body)
                expect(response.statusCode).toBe(400);
            }
        })
    })
});
