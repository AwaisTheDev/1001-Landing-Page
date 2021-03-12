$(function() {
  "use strict";
    /*-------------------------------------------------------------------------------
	  testimonial slider
	-------------------------------------------------------------------------------*/
    if ($('.testimonial').length) {
      $('.testimonial').owlCarousel({
          loop: true,
          margin: 30,
          items: 5,
          nav: false,
          //dots: true,
          dotsContainer: '#carousel-custom-dots',
          responsiveClass: true,
          slideSpeed: 300,
          paginationSpeed: 500,
          responsive: {
              0: {
                  items: 1
              }
          }
      })
    }
    $('.owl-dot').click(function () {
      $('.testimonial').owlCarousel().trigger('to.owl.carousel', [$(this).index(), 300]);
    });


    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      video: true,
      
  }); 

});


