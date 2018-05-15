/* global $, COLORS, Handlebars, XKCD */

// var palette = { red: '#FF0000',
//   orange: '#FF7F00',
//   yellow: '#FFFF00',
//   green: '#00FF00',
//   blue: '#0000FF',
//   violet: '#7F00FF',
//   white: '#FFFFFF',
//   black: '#000000',
//   gray: '#808080',
// brown: '#A52A2A' }

var colorIsLight = function (r, g, b) {
  // Counting the perceptive luminance
  // human eye favors green... 
  var a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return (a < 0.5);
}

function recordPlayerAnswer (playerName, color, playerNameForColor, consensusName, answers) {
  if (!answers[playerName]) {
    answers[playerName] = {
      total: 0,
      right: 0,
      wrong: 0,
      answers: []
    }
  }

  var guy = answers[playerName]
  guy.total += 1
  guy.name = playerName
  var isRight = playerNameForColor === consensusName
  if (isRight) {
    guy.right += 1
  } else {
    guy.wrong += 1
  }
  guy.successRate = Math.round((guy.right / guy.total) * 100)
}

function testOneColor (color, consensusName, answers) {
  for (var x = 0; x < COLORS.algos.length; x++) {
    var guy = COLORS.algos[x]
    var rgb = tinycolor(color).toRgb()
    var name = guy.f(color, rgb.r, rgb.g, rgb.b)
    recordPlayerAnswer(guy.name, color, name, consensusName, answers)
  }
}

function findRealName (color) {
  // create a tree of mappings
  var names = {'black': 'black',
    'dark green': 'green',
    'green': 'green',
    'navy blue': 'blue',
    'dark blue': 'blue',
    'dark teal': 'blue',
    'blue': 'blue',
    'teal': 'blue',
    'light green': 'green',
    'light blue': 'blue',
    'cyan': 'blue',
    'sky blue': 'blue',
    'brown': 'brown',
    'dark purple': 'violet',
    'maroon': 'red',
    'red': 'red',
    'dark red': 'red',
    'purple': 'violet',
    'magenta': 'violet',
    'pink': 'red',
    'dark brown': 'brown',
    'orange': 'orange',
    'olive': 'green',
    'gold': 'yellow',
    'mustard': 'yellow',
    'yellow': 'yellow',
  'lime green': 'green'}

  if (names[color]) {
    return names[color]
  }
  return color
}

function testColors () {
  // what does everyone say?
  var answers = {}
  var textHome = $('#textHome')
  var body = $('body')
  // for every color in the XKCD
  var allColors = Object.keys(XKCD)
  var howMany = allColors.length
  var state = {current: 1, num: howMany, algos: answers}

  for (var x = 0; x < howMany; x++) {
    setTimeout(function (x, state) {
      var color = allColors[x]
      var name = XKCD[color]
      const clrRBG = tinycolor(color).toRgb()
      const fontColor = colorIsLight(clrRBG.r,clrRBG.g,clrRBG.b) ? '#000' : '#FFF';
      // const clr = tinycolor.random()
      // var color = `#${clr.toHex()}`
      // const clrRBG = clr.toRgb()
      var consensusName = findRealName(name)
      testOneColor(color, consensusName, answers)
      state.current = x + 1
      textHome.html(COLORS.template(state))
      
      body.css('background-color', color)
      body.css('color', fontColor)
    }.bind(null, x, state), 10)
  }
}

$(window).load(function () {
  var source = $('#colors-template').html()
  COLORS.template = Handlebars.compile(source)
  testColors()
})
