# The Challenge

Write a function in Javascript (*or provide a docker image*) that takes in an RGB color and returns what "parent" color it's a shade of. 

The url you expose should be something that takes a hex color and returns a string "red" or "brown" etc.
```http://127.0.0.1:3000/prediction/color/name?hex=db5929&algorithm=distance```

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