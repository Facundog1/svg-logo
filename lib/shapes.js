class Shape {
    constructor() {
      this.color = "";
    }
    setColor(color) {
      this.color = color;
    }
  }
  
  
  class Circle extends Shape {
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" /> `
    }
  };
  
  class Square extends Shape {
  
    render() {
    return `<square x="40" y="30" width="200" height="200 fill="${this.color}"/>`
    }
  
  };
  
  class Triangle extends Shape {
    render() {
      return `<triangle x="150" y="300" z="300" fill="${this.color}"/>`
    }
  }
  module.exports = {
    Circle,
    Square,
    Triangle
  }