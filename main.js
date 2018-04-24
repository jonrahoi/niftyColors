/* global $, COLORS, Handlebars */

// var aColors = { red: '#FF0000',
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

function cleanParams () {
  var params = location.hash
  console.log('cleanParams', params)
  if (params) {
    if (params[0] !== '#') {
      params = '#' + params
    }
    var isOk = /^#[0-9A-F]{6}$/i.test(params)
    if (isOk) {
      return params
    }
  }
  return null
}
/*
let c = tinycolor.random() //.toRgb()
        let r = c.toRgb().r
        let g = c.toRgb().g
        let b = c.toRgb().b
        let name = `#${c.toHex()}`
*/
function testColor (isClick) {
  const clr = tinycolor.random()
  var color = `#${clr.toHex()}`
  const clrRBG = clr.toRgb()

  if (!isClick) {
    color = cleanParams() || color
  }
  // if there's a color in the URL, use that.
  $(this).css('background-color', color)
  $('#randomColor').text(color)

  history.pushState(null, null, color)
  // what does everyone say?
  var answers = []
  for (var x = 0; x < COLORS.algos.length; x++) {
    var guy = COLORS.algos[x]
    var name = guy.f(color, clrRBG.r, clrRBG.g, clrRBG.b)
    answers.push({
      name: guy.name,
      color: name
    })
  }

  
  const fontColor = colorIsLight(clrRBG.r,clrRBG.g,clrRBG.b) ? '#000' : '#FFF';
  $('#textHome').html(COLORS.template({algos: answers}))
  $('body').css('color', fontColor)
}
$(window).load(function () {
  var source = $('#colors-template').html()
  COLORS.template = Handlebars.compile(source)

  testColor.apply($('body'))
  $('body').on('click', testColor.bind($('body'), true))
  $(window).on('hashchange', function () {
    testColor.apply($('body'))
  })
})
