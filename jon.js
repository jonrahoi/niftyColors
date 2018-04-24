;(function (exports) {
    
    var aColors = { red: '#FF0000',
    orange: '#FF7F00',
    yellow: '#FFFF00',
    green: '#00FF00',
    blue: '#0000FF',
    violet: '#7F00FF',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#808080',
    brown: '#A52A2A' }

    function pickColor(hex, r, g, b){
        const colors = Object.keys(aColors)
        const randindex = Math.floor(Math.random() * colors.length)
        return colors[randindex]
    }

    if (!exports.algos) {
      exports.algos = []
    }
    exports.algos.push({name: 'jon', f: pickColor})
  })(COLORS)