function generateLogo(text, textColor, shapeChoice) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeChoice.renderShape()}
  <font><font-face font-family="Super Sans" /></font>
  <text x="150" y="${shapeChoice.textY}" font-size="60" text-anchor="middle" font-family="Super Sans" fill="${textColor}">${text.toUpperCase()}</text>
  </svg>`;
  }

  module.exports = generateLogo