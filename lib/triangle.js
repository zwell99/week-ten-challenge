class Triangle {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    getSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>
      
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
</svg>`
    }
}

module.exports = Triangle;