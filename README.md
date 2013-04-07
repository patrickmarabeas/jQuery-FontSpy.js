Font-Face-Font-Checker
======================

Demo: http://pulse-dev.com/files/stackoverflow/fontfacedelay/index4.htm

This jQuery plugin will allow you to check whether custom @font-face fonts have loaded or not. This allows you to alter your styles while fonts are loading in, or upon failure.

This works by checking the change in width of a string. We are using Comic-Sans as the font to compare against as it is the most different. Using a very large font-size, we are able to determine even the slightest change. When the width of the string changes, we know that the custom font-face file has been loaded and applied.

**USAGE**

*CSS*

	.checkme {
		font-family: "Lobster"; //don't specify fallback font
		font-size: 120px;
	}

	.pickme {
		font-family: "FontAwesome";
		font-size: 120px;
	}

	.fontLoading {
		visibility: hidden !important; 
		//!important may or may not be necessary, depending on your CSS structure 
	}

	.fontFail {
		visibility: visible !important;
	}

	.anotherClass {
		font-family: verdana !important;
		font-size: 20px !important;
		color: green !important;
	}


	<span class="checkme">Crafting</span>
	<span class="checkme">Serious</span>
	<span class="checkme">Websites</span>

	<i class="icon-search pickme"></i>
	<i class="icon-inbox pickme"></i>
	<i class="icon-barcode pickme"></i>
	
*JavaScript*
	
	$(document).ready(function() {

		$('.pickMe').fontChecker({
			fontAwesome: true, //set to true if using Font Awesome (default is false)
			onLoad: 'fontLoading', //call this class(es) when the font is loading (!important tag may be needed)
			onFail: 'fontFail' //call this class(es) when the font has failed to load (!important tag may be needed)
		});

		$('.checkme').fontChecker({ //non Font Awesome font
			onLoad: 'fontLoading',
			onFail: 'fontFail anotherClass'
		});


	});