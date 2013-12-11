/* jQuery-FontFaceSpy.js v2.0.0
 * https://github.com/patrickmarabeas/jQuery-FontFaceSpy.js
 *
 * Copyright 2013, Patrick Marabeas http://pulse-dev.com
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 10/12/2013
 */

(function($) {

	$.fontChecker = function( element, conf ) {
		var $element = $(element);
		var defaults = {
			font: $element.css("font-family"),
			onLoad: '',
			onFail: '',
			testFont: 'Comic Sans MS',
			testString: 'QW@HhsXJ',
			delay: 50,
			timeOut: 2500
		};
		var config = $.extend( defaults, conf );
		var tester = document.createElement('span');
			tester.style.position = 'absolute';
			tester.style.top = '-9999px';
			tester.style.left = '-9999px';
			tester.style.visibility = 'hidden';
			tester.style.fontFamily = config.testFont;
			tester.style.fontSize = '250px';
			tester.innerHTML = config.testString;
		document.body.appendChild(tester);
		var fallbackFontWidth = tester.offsetWidth;
		tester.style.fontFamily = config.font + ',' + config.testFont;
		function checkFont() {
			var loadedFontWidth = tester.offsetWidth;
			if (fallbackFontWidth === loadedFontWidth){
				if(config.timeOut < 0) {
					$element.removeClass(config.onLoad);
					$element.addClass(config.onFail);
					console.log('failure');
				}
				else {
					$element.addClass(config.onLoad);
					setTimeout(checkFont, config.delay);
					config.timeOut = config.timeOut - config.delay;
				}
			}
			else {
				$element.removeClass(config.onLoad);
			}
		}
		checkFont();
	};

	$.fn.fontChecker = function(config) {
		return this.each(function() {
			if (undefined == $(this).data('fontChecker')) {
				var plugin = new $.fontChecker(this, config);
				$(this).data('fontChecker', plugin);
			}
		});
	};

})(jQuery);