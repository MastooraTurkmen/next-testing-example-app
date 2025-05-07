const { sum, deleteUserById, findUserById } = require("../utils/helper")

let userData = []
console.log("Before all functions", userData);

beforeEach(() => {
    userData = ["Clement", "John", "Jane"]
    console.log("Before each test", userData);
})

afterEach(() => {
    console.log("After each test");
})

beforeAll(() => {
    console.log("Before all tests");
})

afterAll(() => {
    userData = []
    console.log("After all tests", userData);
})

test("1 plus 1 equals 2", () => {
    let a = 1;
    let b = 1;

    expect(a + b).toBe(2);
})


describe("Testing other mather methods", () => {
    test("Testing that a variable is undefined", () => {
        let number = undefined;
        expect(number).toBeUndefined();
        expect(number).not.toBeDefined();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
        expect(number).not.toBeNull();
    })

    test("Number Comparison", () => {
        const a = 1;
        const b = 2;

        expect(a).toBeLessThan(b);
        expect(a).toBeLessThanOrEqual(b);
        expect(b).toBeGreaterThan(a);
        expect(b).toBeGreaterThanOrEqual(a);
        expect(a).not.toBeGreaterThan(b);

        expect(a + b).toBeGreaterThan(2);
        expect(a + b).toBeGreaterThanOrEqual(3)
        expect(a + b).toBeLessThan(4);
        expect(a + b).toBeLessThanOrEqual(3);
    })

    test("there should be no I in team", () => {
        let sting = "team";

        expect(sting).not.toMatch("I")
    })

    test("there is 'stop' in Christopher", () => {
        let string = "Christopher";
        expect(string).toMatch(/stop/);
    })

    const shoppingList = [
        "milk",
        "bread",
        "eggs",
        "butter",
    ]

    test("the shopping list doesn't have PS4", () => {
        expect(shoppingList).not.toContain("PS4");
        expect(shoppingList).toContain("milk");
    })
})


// Testing primitive and reference types equality
describe("Testing Reference equality", () => {
    const user = {
        name: "Clement"
    }

    user['age'] = 45

    test("Should return a user object with age as 45", () => {
        expect(user).toEqual({
            name: "Clement",
            age: 45
        })
    })

    test("Should return a user with a name and age key", () => {
        expect(user).toEqual(expect.objectContaining({
            name: expect.any(String),
            age: expect.any(Number)
        }))
    })

    // Testing arrays equality

    test("Array equality", () => {
        const users = [
            "Clement",
            "John",
            "Jane"
        ]

        const userObjectInArray = [
            {
                name: "Clement",
                age: 45
            },
            {
                name: "John",
                age: 30
            },
            {
                name: "Jane",
                age: 25,
            }
        ]

        userObjectInArray.push({
            name: "Mary",
            age: 20
        })

        expect(userObjectInArray).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    age: expect.any(Number)
                })
            ])
        )

        users.push("Mary")

        expect(users).toEqual(["Clement", "John", "Jane", "Mary"])
        expect(users).toEqual(expect.arrayContaining(["Jane"]))
    })
})


describe("Testing imported function", () => {
    test("Sum function should add 2 numbers", () => {
        expect(sum(5, 3)).toBe(8)
    })

    test("delete by id function should delete a user by their id", () => {
        const users = [
            {
                id: 1,
                name: "Clement",
                age: 45
            },
            {
                id: 2,
                name: "John",
                age: 30
            },
            {
                id: 3,
                name: "Jane",
                age: 25
            }
        ]

        expect(deleteUserById(users, 2)).toEqual([
            {
                id: 1,
                name: "Clement",
                age: 45
            },
            {
                id: 3,
                name: "Jane",
                age: 25
            }
        ])

        expect(deleteUserById(users, 3).length).toBe(2)

    })

    // done by Test Driven Development
    test("Finds a user by ID from a list of users", () => {
        const users = [
            {
                id: 1,
                name: "Clement",
                age: 45
            },
            {
                id: 2,
                name: "John",
                age: 30
            },
            {
                id: 3,
                name: "Jane",
                age: 25
            }
        ]

        expect(findUserById(users, 1)).toEqual({
            name: "Clement",
            age: 45,
            id: 1
        })

        expect(findUserById(users, 10)).toBeUndefined()
    })
})