import { it, expect } from "vitest";

import { transformToNumber, validateNumber } from "./numbers"

it("Should sum values every time increased", () => {
    const value = 3

    for (let i = 0; i++; i < 20) {
        value += i
    }

    const result = transformToNumber(value)

    expect(result).toBe(3)
})

it("Should transform string to number", () => {
    const input = "2"

    expect(transformToNumber(input)).toBe(2)
})

it("should transform string number to a number of type of number", () => {
    const input = "2"

    // expect(typeof transformToNumber(input)).toBe("number")
    expect(transformToNumber(input)).toBeTypeOf("number")
})

it("should yield NaN for non-transformable values", () => {
    const input = "invalid"
    const input2 = {}

    const result = transformToNumber(input)
    const result2 = transformToNumber(input2)

    expect(result).toBeNaN()
    expect(result2).toBeNaN()
})