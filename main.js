
$('.multiple-items').slick({
    // centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots:true,
    variableWidth: true,
    responsive: [
                  {
                     breakpoint: 1024,
                     settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '20px',
                        slidesToShow: 2
                     }
                  },
                  {
                     breakpoint: 768,
                     settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '10px',
                        slidesToShow: 2
                     }
                  },
                  {
                     breakpoint: 320,
                     settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 1
                     }
                  }
         
               ]
  });



   