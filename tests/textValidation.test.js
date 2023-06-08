const index = require("../index.js");

describe("Validation", () => {
    it("should work fine", () => {
        var result = index.confirmTextLength("aaa");
        expect(result).toBe(true);
    });
    it("should return an error message", () => {
        var result = index.confirmTextLength("aaaa");
        expect(result).toBe("Input is to large.");
    });
});