class Shape {
    constructor(shapeColor) {
      this.shapeColor = shapeColor;
    }
   renderShape(){
    return `<${this.shapeCode} fill="${this.shapeColor}" />`
   }
  }

  
  class Circle extends Shape {
    constructor(shapeColor) {
      super(shapeColor)
      this.shapeCode = `circle cx="150" cy="100" r="100"`
      this.textY = 120
    }
  };

  class Square extends Shape {
    constructor(shapeColor) {
      super(shapeColor)
      this.shapeCode = `rect x="50" y="0" width="200" height="200"`
      this.textY = 120
    }

  };

  class Triangle extends Shape {
    constructor(shapeColor) {
      super(shapeColor)
      this.shapeCode =  `polygon points="150, 0 300, 200 0, 200"`
      this.textY = 150
    }
  };

  module.exports = {
    Circle,
    Square,
    Triangle
  }