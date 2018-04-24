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

function hexToRgb (hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}
function padNum (num) {
  var padded = ('00' + num.toString(16)).slice(-2)
  console.log(padded)
  return padded
}

function getFontColor (hex) {
  var rgb = hexToRgb(hex)
  var color = 'black'
  var brightness = ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000
  // console.log(brightness)
  if (brightness < 128) color = 'white'

  return color
}
function getRandomColor () {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  var randomcolor = '#' + padNum(r) + padNum(g) + padNum(b)
  return randomcolor
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
// guy.answers.push({
//   color: color,
//   playerNameForColor: playerNameForColor,
//   consensusName: consensusName,
//   right: isRight
// })
}

function testOneColor (color, consensusName, answers) {
  for (var x = 0; x < COLORS.algos.length; x++) {
    var guy = COLORS.algos[x]
    var name = guy.f(color)
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
      var consensusName = findRealName(name)
      testOneColor(color, consensusName, answers)
      state.current = x + 1
      textHome.html(COLORS.template(state))
      body.css('background-color', color)
      body.css('color', getFontColor(color))
    }.bind(null, x, state), 10)
  }
}

$(window).load(function () {
  var source = $('#colors-template').html()
  COLORS.template = Handlebars.compile(source)
  testColors()
})
