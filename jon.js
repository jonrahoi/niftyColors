;(function (exports) {
    
    var parents = { red: '#FF0000',
    orange: '#FF7F00',
    yellow: '#FFFF00',
    green: '#00FF00',
    blue: '#0000FF',
    violet: '#7F00FF',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#808080',
    brown: '#A52A2A' }

    /* YOUR CODE BELOW HERE  */
    
    // change this to your name
    const myname = "random"

    /* 
        this function will be passed in the color to be identified
        as hex (e.g. "#FF00FF", and also as r, g, b (eg 255, 0, 255)
        you can ignore the one(s) you won't use
    */
    function pickColor(hex, r, g, b){
        const colors = Object.keys(parents)
        const randindex = Math.floor(Math.random() * colors.length)
        return colors[randindex]
    }

    /* YOUR CODE ABOVE HERE  */
    if (!exports.algos) {
      exports.algos = []
    }
    exports.algos.push({name: myname, f: pickColor})
  })(COLORS)