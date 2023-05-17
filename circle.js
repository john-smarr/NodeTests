class Circle {
    constructor(radius) {
        this.area = radius**2*Math.PI
        this.circum = 2*Math.PI*radius
    }
}

module.exports = Circle