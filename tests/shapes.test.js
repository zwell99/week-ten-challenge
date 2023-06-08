const Circle = require("./lib/circle.js");
const Triangle = require("./lib/triangle.js");
const Square = require("./lib/square.js");

describe("Shape Objects", () => {
    it("should create a circle properly", () => {
        var circle = new Circle("red", "aaa", "blue");
        expect(typeof(circle)).toBe(Circle);
    });
    it("should create a triangle properly", () => {
        var triangle = new Triangle("red", "aaa", "blue");
        expect(typeof(triangle)).toBe(Triangle);
    });
    it("should create a square properly", () => {
        var square = new Square("red", "aaa", "blue");
        expect(typeof(square)).toBe(Square);
    });
})