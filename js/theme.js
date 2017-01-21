// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
    
    $('#aboutbutton').click(function(){
        $(this).remove();
    });
})(jQuery); // End of use strict

(function() {
    
    var html = $('html'),
        H = html.outerHeight(true),
        S = $(window).scrollTop(),
        P = S/H,
        toggle = $('input#toggle');
    
    $(window).scroll(function() {
        S = $(window).scrollTop();
        P = S/H;
    });
    
    $(window).resize(function() {
        if ( toggle.is(':checked') ) {
            H = html.outerHeight(true);
            $(window).scrollTop(P*H);
        }
    });
    
    toggle.change(function() {
        H = html.outerHeight(true);
        S = $(window).scrollTop();
        P = S/H;
    });
    
})();

