import { it, expect, describe } from "vitest";

import { cleanNumbers, transformToNumber, validateNumber } from "./numbers"

describe("transformToNumber", () => {
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
})


describe("cleanNumbers", () => {
    it("should return an array of number if an array of string number values is provided", () => {
        const input = ["1", "2", "3"]
        const result = cleanNumbers(input)

        expect(result).toEqual([1, 2, 3])
        expect(result).toBeTypeOf("object")
        expect(result[0]).toBeTypeOf("number")
    })

    it("should throw an error if an array with at least one empty string is provided", () => {
        const numberValues = ["", 1]
        const cleanFn = () => cleanNumbers(numberValues)
        expect(cleanFn).toThrow()
    })
})