import { describe, expect, it } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty", () => {
    it("should throw an error if an empty string is provided", () => {
        const input = "";
        const validationFn = () => validateStringNotEmpty(input);

        expect(validationFn).toThrow();
    });

    it("should throw an error with a message that contains a reason (must not be empty)", () => {
        const input = "";
        const validationFn = () => validateStringNotEmpty(input);

        expect(validationFn).toThrow(/must not be empty/);
    })

    it("should throw an error if a long string of blanks is provided", () => {
        const input = "     ";
        const validationFn = () => validateStringNotEmpty(input);

        expect(validationFn).toThrow();
    })

    it("should throw an error if a any other value than a string is provided", () => {
        const inputNumber = 1;
        const inputObject = {};
        const inputBool = 1

        const validationFn = () => validateStringNotEmpty(inputNumber);
        const validationFn2 = () => validateStringNotEmpty(inputObject);
        const validationFn3 = () => validateStringNotEmpty(inputBool);
        expect(validationFn).toThrow();
        expect(validationFn2).toThrow();
        expect(validationFn3).toThrow();
    })

    it("should not throw an error if a non-empty string is provided", () => {
        const input = "valid";
        const validationFn = () => validateStringNotEmpty(input);
        expect(validationFn).not.toThrow();
    })
})

describe("validateNumber", () => {
    it("should throw an error if NaN is provided", () => {
        const input = NaN
        const validationFn = () => validateNumber(input)
        expect(validationFn).toThrow()
    })

    it("should throw an error with a message that contains a reason (invalid number)", () => {
        const input = NaN
        const validationFn = () => validateNumber(input)
        expect(validationFn).toThrow(/Invalid number/)
    })

    it("should throw an error if a number is provided", () => {
        const input = 1;
        const validationFn = () => validateNumber(input)

        expect(validationFn).not.toThrow();
    })

    it("should throw an error if a number is provided", () => {
        const input = "1";
        const validationFn = () => validateNumber(input)

        expect(validationFn).toThrow();
    })
})
