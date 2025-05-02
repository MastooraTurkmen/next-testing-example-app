const sum = require("./sum").sum

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

// One is truthy

test("one is truthy", () => {
    const n = 1;
    expect(n).toBeTruthy()
})

// invalid input
const myFunction = require("./sum").myFunction

test("throws on invalid input", () => {
    expect(() => {
        myFunction(invalidInput)
    }).toThrow()
})