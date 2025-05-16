import { expect, it } from "vitest"
import { generateToken } from "./async-example"


it("should generate a token value", () => {
    const testUserEmail = "test@test.com"

    generateToken(testUserEmail, (err, token) => {
        expect(token).toBeDefined()
        expect(token).toBeString()
        expect(token).toMatch(/^[a-zA-Z0-9]{16}$/)
        expect(token).toHaveLength(16)
    })
})