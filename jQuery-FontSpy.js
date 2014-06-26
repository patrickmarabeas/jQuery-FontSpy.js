/* jQuery-FontSpy.js v2.0.0
 * https://github.com/patrickmarabeas/jQuery-FontSpy.js
 *
 * Copyright 2013, Patrick Marabeas http://pulse-dev.com
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 10/12/2013
 */

(function($) {

    function FontSpy ( element, conf ) {
        var $element = $(element);
        var defaults = {
            font: $element.css("font-family"),
            onLoad: '',
            onFail: '',
            testFont: 'Comic Sans MS',
            testString: 'QW@HhsXJ',
            delay: 50,
            timeOut: 2500,
            callback: $.noop
        };
        var config = $.extend( defaults, conf );
        var $tester = $('<span>' + config.testString + '</span>')
            .css('position', 'absolute')
            .css('top', '-9999px')
            .css('left', '-9999px')
            .css('visibility', 'hidden')
            .css('fontFamily', config.testFont)
            .css('fontSize', '250px')
        $('body').append($tester);
        var fallbackFontWidth = $tester.outerWidth();
        $tester.css('fontFamily', config.font + ',' + config.testFont);

        function checkFont() {
            var loadedFontWidth = $tester.outerWidth();
            if (fallbackFontWidth !== loadedFontWidth){
                success();
            } else if(config.timeOut < 0) {
                failure();
            } else {
                retry();
            }
        }
        function failure () {
            $element.removeClass(config.onLoad);
            $element.addClass(config.onFail);
            config.callback(new Error('FontSpy timeout'));
            $tester.remove();
        }
        function success () {
            config.callback();
            $element.removeClass(config.onLoad);
            $tester.remove();
        }
        function retry () {
            $element.addClass(config.onLoad);
            setTimeout(checkFont, config.delay);
            config.timeOut = config.timeOut - config.delay;
        }
        checkFont();
    }

    $.fn.fontSpy = function(config) {
        return this.each(function() {
            if (undefined == $(this).data('fontSpy')) {
                var plugin = new FontSpy(this, config);
                $(this).data('fontSpy', plugin);
            }
        });
    };

})(jQuery);
