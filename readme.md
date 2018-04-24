# Nifty Topic Hour #1 : What the heck is brown

Thanks for coming to Nifty Topic Hour #1 everyone - here are some relevant links, for the curious.

* [a link to the slides](http://rahoi.com/nifty/hueredity.pdf)

* [nifty topic hour signup sheet](https://docs.google.com/spreadsheets/d/17BP85n9nmZXPMI_9ve_qNro3hjSRjoDQl6FGPox1UJw/)

lists of colors : 
* [xkcd color survey](https://blog.xkcd.com/2010/05/03/color-survey-results/)
* [color dictionaries](https://people.csail.mit.edu/jaffer/Color/Dictionaries#The%20Dictionaries)

references and fun things:

* examine the pixels in an image using the [online color summarizer](http://mkweb.bcgsc.ca/color-summarizer/)
* curated by profesionals, a [large list of named colors](http://mkweb.bcgsc.ca/colornames/)
* [the x11 list from xwindows](https://en.wikipedia.org/wiki/X11_color_names)
* I referred to this in passing about perceived lumosity between yellow and blue [presentation on color palettes](http://mkweb.bcgsc.ca/brewer/talks/color-palettes-brewer.pdf)

* in case you don't know, and don't want to learn javascript, you might be able to use [scala.js](https://www.scala-js.org/)

* [RGB Color Space](https://en.wikipedia.org/wiki/RGB_color_space)
* [HSL & HSV Color Space](https://en.wikipedia.org/wiki/HSL_and_HSV)
* [Munsell Color Space](https://en.wikipedia.org/wiki/Munsell_color_system)
* [How we name colors](https://en.wikipedia.org/wiki/Color_term)
* an absolutely essential segment from my favorite podcast, [Radiolab]* (https://www.wnycstudios.org/story/211213-sky-isnt-blue)
* [Photoreceptor Cell](https://en.wikipedia.org/wiki/Photoreceptor_cell)
* [adobe color picker](https://color.adobe.com/)

if you have a different idea that won't work in the browser at all, let's chat.

## The Challenge

Write a function that takes in a color and returns what "parent" color it's a shade of.

## to use this repo

1. Duplicate `jon.js`, rename, and place your algo inside.
2. add a reference to it in `index.html` and `tests.html` (grep for `jon.js` and it will be obvious)
3. If you have node installed, you can run the following commands in the cloned directory: `npm install` and `npm start`.
4. the pages will be served on `http://localhost:1337`
5. alternatively you can serve the files however you want; node is not required.

there are two pages - the main one, which tests one random color per click, and:

`http://localhost:1337/tests.html`

which tests your algo against *HALF* of the fully-saturated RGB colors. (I'm saving the other half for the true test)

the colors used for testing here are in `testdata.js`. Feel free to use that data to play around.

Lastly, I have included on each page the library [TinyColor](https://github.com/bgrins/TinyColor) it makes parsing and converting colors to different color spaces easy.