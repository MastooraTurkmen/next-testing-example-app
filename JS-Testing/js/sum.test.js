const sum = require("./sum")

test("properly adds two numbers", () => {
    expect(sum(1, 2)).toBe(3)
})

/////////////////
/// Matchers ///
////////////////

// null
test("null is falsy", () => {
    const n = null;
    expect(n).toBeFalsy()
})

// zero
test("null is falsy", () => {
    const n = 0;
    expect(n).toBeFalsy()
})

// 