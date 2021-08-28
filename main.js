
// $('.multiple-items').slick({
//    //  centerMode: true,
//    //  infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     dots:true,
//     variableWidth: true,
//     responsive:  [
//       {
//          breakpoint: 1024,
//          settings: {
//             arrows: false,
//             centerMode: true,
//             centerPadding: '20px',
//             slidesToShow: 3,
//             slidesToScroll: 1,
//          }
//       },
//       {
//          breakpoint: 768,
//          settings: {
//             arrows: false,
//             // centerMode: true,
//             // centerPadding: '10px',
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             dots:true,
//          }
//       },
//       {
//          breakpoint: 600,
//          settings: {
//             arrows: false,
//             // centerMode: true,
//             centerPadding: '0px',
//             slidesToShow: 1
//          }
//       }

//    ]
//   });
$(document).ready(function () {
   $('.multiple-items').slick({
      centerMode: true,
      variableWidth: true,
      arrows: true,
      dots: true,
      // centerPadding: '30px',
      slidesToShow: 3,
      slidesToScroll: 1,
      // mobileFirst: false,
      // waitForAnimate: false,
      // infinite: false,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               arrows: false,
               // centerMode: true,
               // centerPadding: '20px',
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               centerMode: true,
               centerPadding: '10px',
               slidesToShow: 3,
               slidesToScroll: 3,
            }
         },
         {
            breakpoint: 600,
            settings: {
               arrows: false,
               centerMode: true,
               centerPadding: '0px',
               slidesToShow: 1
            }
         }

      ]

   });
});


   