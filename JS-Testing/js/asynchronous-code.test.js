const { fetchData, fetchPromise } = require("./asynchronous-code")

// Using callbacks
test("the data is peanut butter", done => {
    function callback(data) {
        try {
            expect(data).toBe("peanut butter");
            done();
        } catch (error) {
            done(error);
        }
    }
    fetchData(callback);
})

// Using Promises
test("the data is peanut butter", () => {
    return expect(fetchPromise()).resolves.toBe("peanut butter");
})


// Error handling with Promises
test("the fetch fails with an error", () => {
    return expect(fetchPromise()).rejects.toThrow("error");
})


// Using async/await
test("the data is peanut butter", async () => {
    const data = await fetchPromise();
    expect(data).toBe("peanut butter")
})