# jQuery-FontSpy.js

### Style your @font-face elements while they load or upon catastrophic failure.

jQuery-FontSpy.js works by checking the change in width of a string. Courier New is used as the font to compare against as it is one of the most widely distrubuted default fonts. Using a very large font-size, we are able to determine even the slightest change. When the width of the string changes, we know that the custom font-face file has been loaded and applied.

## Install:

Grab it with Bower: `bower install fontspy`

## Usage:

```javascript
fontSpy('My Icons', {
  glyphs: '\ue81a\ue82d\ue823',
  success: function() {
    //alert("My Icons loaded successfully");
  },
  failure: function() {
    //alert("My Icons failed to load");
  }
});
```

The first argument passed to fontSpy is the name of the font-family. This is used to style the test string when checking width changes.

The second argument is for options that can be passed to jQuery-FontSpy.

If a custom font is loaded, a class with the font name is added to the html element.
If a custom font fails to load, a class with the font name prefixed with `no-` is add to the HTML element.

Font names are converted to lowercase and spaces are removed when converted to class names to be used on the HTML element.
For example, the font name, `My Icons` will render as `myicons` when used an HTML class.


## Preventing FOUC (Flash of unstyled content):

Hiding FOUC is major use case of jQuery-FontSpy.js. To prevent FOUC with jQuery-FontSpy, a class is added to the HTML element at the start of a page load, ```hide-custom-fonts```, which can be used to hide elements using custom-fonts.

```css
/* Hide elements using custom fonts until they are loaded to prevent FOUC */
.hide-custom-fonts .bannerTextChecked {
  visibility: hidden !important;
}
```
In the event a custom font loads, a class is added to the html element with the name of the font or if the font fails to load a class with the name of the font prefixed with "no-" is added to the html element. These classes can be used to override the styling that hides elements using custom fonts.

```css
/* Hide elements using custom fonts until they are loaded to prevent FOUC */
.lobster .bannerTextChecked,
.no-lobster .bannerTextChecked {
  visibility: visible !important;
}
```


## Options

**glyphs:** If your font is mapped to PUA characters, you can pass a few of the glyphs contained in the custom font. We measure these characters to make sure the font has loaded successfully.

**success:** If the font specified as in the first arguement passed to fontSpy loads, you can excute custom JavaScript here.

**failure:** If the font specified as in the first arguement passed to fontSpy fails to load, you can excute custom JavaScript here.

## Browser Support

fontcheck has been tested and works in the following environments.

* Chrome 40
* Firefox 35
* Safari 7.1
* Internet Explorer 8, 9, 10, 11
* Android 4.4.4 Stock Browser
* iOS Safari 8.1
