import {describe, expect, it} from "@jest/globals";
import {sum, multiply} from "../index";


describe("testing sum functionality", () => {
    it("adding 1 and 2 correctly", () => {
        const FinalAnswer = sum(2, 3);
        expect(FinalAnswer).toBe(5);
    })
    it("adding 4 and -10 correctly", () => {
        const FinalAnswer = sum(4, -10);
        expect(FinalAnswer).toBe(-6);
    })
    it("adding 100 and 200 correctly", () => {
        const FinalAnswer = sum(100, 200);
        expect(FinalAnswer).toBe(300);
    })
})

describe("testing multiply functionality", () => {
    it("mult 4 and 5", () => {
        const answer = multiply(4, 5);
        expect(answer).toBe(20);
    })
})