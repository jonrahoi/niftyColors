# The Challenge

Write a function in Javascript (*or provide a docker image*) that takes in an RGB color and returns what "parent" color it's a shade of. 

### for docker images ###
- The url you expose should take a hex color and returns a string of parent color name. It should look like : 
```http://127.0.0.1:3000/prediction/color/name?hex=db5929&algorithm=distance```
- performance is a concern, so any super-slow (> 300ms?) entries will be skipped. 
- javascript entries are preferred.  See note about `scala.js` below if your tastes lie elsewhere.

## Parent Colors ##

```javascript
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
```

(The set will make more sense at the talk, but this is the global set into which all colors must be bucketed.)

*NOTE* : the training data set has other colors than the ones listed above - I map those colors manually into our palette using [this function](https://github.com/jonrahoi/niftyColors/blob/4108f33b138a41c2d69834aa84843d3e855cac36/tests.js#L52)

## to use this repo

1. Duplicate `jon.js` (which is random), rename, and place your algo inside.
2. add a reference to it in `index.html` and `tests.html` (grep for `jon.js` and it will be obvious)
3. If you have node installed, you can run the following commands in the cloned directory: `npm install` and `npm start`.
4. the pages will be served on `http://localhost:1337`
5. alternatively you can serve the files however you want; node is not required.

there are two pages - the main one, which tests one random color per click, and:

`http://localhost:1337/tests.html`

which tests your algo against *HALF* of the fully-saturated RGB colors. (I'm saving the other half for the true test)

the colors used for testing here are in `testdata.js`. Feel free to use that data to play around.

Lastly, I have included on each page the library [TinyColor](https://github.com/bgrins/TinyColor) it makes parsing and converting colors to different color spaces easy.

## LINKS ##
* in case you don't know, and don't want to learn javascript, you might be able to use [scala.js](https://www.scala-js.org/)

* [RGB Color Space](https://en.wikipedia.org/wiki/RGB_color_space)
* [HSL & HSV Color Space](https://en.wikipedia.org/wiki/HSL_and_HSV)
* [Munsell Color Space](https://en.wikipedia.org/wiki/Munsell_color_system)
* [adobe color picker](https://color.adobe.com/)
