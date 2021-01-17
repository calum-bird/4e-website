function heroShrinker() {
    var hero = $('.hero'),
    heroHeight = $('.hero').outerHeight(true);
    $(hero).parent().css('padding-top', heroHeight);

    var headerText  = $('#header-text');
    var headerImage  = $('#header-image');

    var navbar = $('#navbar');

    navbar.fadeOut();

    $(window).scroll(function() {
        var scrollOffset = $(window).scrollTop();
        if (scrollOffset < heroHeight) {
            $(hero).css('height', (heroHeight - scrollOffset));
        }
        if (scrollOffset > (heroHeight - 384)) {
            hero.addClass('fixme');
            headerImage.addClass('fade');
            headerText.addClass('fade');

            navbar.fadeIn();
        } else {
            hero.removeClass('fixme');
            headerImage.removeClass('fade');
            headerText.removeClass('fade');

            navbar.fadeOut();
        };
    });
}

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 180
        }, 550, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          // window.location.hash = hash;
        });
      } // End if
    });
  });

heroShrinker();
