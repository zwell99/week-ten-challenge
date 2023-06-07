class Circle {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    getSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.color}" />
      
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${this.text}</text>
      
</svg>`
    }
}

module.export = Circle;