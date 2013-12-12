# jQuery-FontSpy.js

### Style your @font-face elements while they load or upon catastrophic failure.

This works by checking the change in width of a string. Comic-Sans is used as the font to compare against as it is the most "unique" default font. Using a very large font-size, we are able to determine even the slightest change. When the width of the string changes, we know that the custom font-face file has been loaded and applied.

Apply it to your project

	.bannerTextChecked {
    		font-family: "Lobster";
    		/* don't specify fallback font here, do this in onFail class */
    }

	$(document).ready(function() {

		$('.bannerTextChecked').fontSpy({
			onLoad: 'hideMe',
			onFail: 'fontFail anotherClass'
		});

	});

Remove that FOUC!

	.hideMe {
		visibility: hidden !important;
	}

	.fontFail {
		visibility: visible !important;
		/* fall back font */
		/* necessary styling so fallback font doesn't break your layout */
	}






