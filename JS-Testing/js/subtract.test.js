const subtract = require('./subtract')

test("properly subtracts two numbers", () => {
    expect(subtract(5, 1)).toBe(4)
})