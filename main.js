$(document).ready(function () {
   $('.multiple-items').slick({
      variableWidth: true,
      arrows: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      mobileFirst: false,
      waitForAnimate: false,
      infinite: true,
      responsive: [{
            breakpoint: 1024,
            settings: {
               arrows: false,
               centerPadding: '20px',
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
            }
         },
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: false,
            }
         },
         {
            breakpoint: 425,
            settings: {
               arrows: false,
               centerPadding: '0px',
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: false,
            }
         }

      ]

   });
});