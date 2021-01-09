// Add your Circle class here

class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    set diameter(value) {
      this._diameter = value
      this.radius = value / 2
    }

    set circumference(value) {
      this._circumference = value
      this.radius = value / (Math.PI * 2)
    }

    get diameter() {
      return this.radius * 2;
    }

   get circumference() {
     return this.diameter * Math.PI
   } 

   get area() {
     return Math.PI * (this.radius * this.radius)
   }

  }