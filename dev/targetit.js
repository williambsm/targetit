/**
 * Created by William Ste-Marie on 2017-08-22.
 **/

(function ( $ ) {

    $.fn.targetIt = function(options) {
        if (options === 'disable' ){
            console.log("InfiniteIt : Disabled.");
            // Unbind Element
            $(window).unbind("scroll.targetIt");
            // Close Plugin
            return false;
        }

        // Default Options and get customs
        var settings = $.extend({
            // Affected Element
            ele: this,
            // Target Height
            offset: 0,
            // Check for target to be reached
            scrollCheck: true,
            // Delay when target is reached
            delay: 2000,
            // Debug Tool
            debug: false,
            // Disabled
            disabled: false
        }, options);

        // Add Scroll Binder
        $(window).on("scroll.targetIt", function() {
            // Check if scrollCheck is enabled
            if ( settings.scrollCheck === false ) return false;

            // Get Current Scrolling Height
            scrollHeight = $(window).scrollTop() + window.innerHeight;
            scrollNeeded = settings.ele.offset().top + ( settings.ele.height() - settings.offset );

            // If debug is set to true
            if ( settings.debug === true ){
                console.log("InfiniteIt : Scroll Height - "+ scrollHeight);
                console.log("InfiniteIt : Scroll Needed - "+ scrollNeeded);
            }

            // Check if scrolling touches end
            if(scrollHeight > scrollNeeded) {

                // If debug is set to true
                if ( settings.debug === true ){
                    console.log("InfiniteIt: Target succesfully reached.");
                }

                // If delay isn't to 0, activate delay
                if ( parseInt(settings).delay !== 0 ){
                    // Disable Scroll Check
                    settings.scrollCheck = false;

                    // If debug is true, tell user
                    if(settings.debug === true){
                        console.log("InfiniteIt : Scrollcheck disabled.");
                    }

                    // Set Delay
                    setTimeout(function(){
                        // Enable scrollCheck
                        settings.scrollCheck = true;
                        // Trigger Scroll
                        $(window).trigger("scroll");
                        // If debug is true, tell user
                        if(settings.debug === true){
                            console.log("InfiniteIt : scrollCheck enabled.");
                        }
                    }, settings.delay);

                }

                // Callback Function if there's one
                if ( typeof settings.callback !== "undefined"){
                    settings.callback();
                }
            }
        });
        // Add Class
        settings.ele.addClass('fb-scroll');


        // If debug is set to true
        if ( settings.debug === true ){
            console.log("InfiniteIt : Plugin initialised");
        }
    };

}( jQuery ));
