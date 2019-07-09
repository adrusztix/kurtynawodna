$(document).ready(function(){

// if ($('#back-to-top').length) {
//     var scrollTrigger = 700, // px
//         backToTop = function () {
//             var scrollTop = $(window).scrollTop();
//             if (scrollTop > scrollTrigger) {
//                 $('#back-to-top').addClass('show-arrow');
//             } else {
//                 $('#back-to-top').removeClass('show-arrow');
//             }
//         };
//     backToTop();
//     $(window).on('scroll', function () {
//         backToTop();
//     });
//     $('#back-to-top').on('click', function (e) {
//         e.preventDefault();
//         $('html,body').animate({
//             scrollTop: 0
//         }, 700);
//     });
// }


	$('#main-slider').bxSlider({
		mode: 'fade',
		auto: true,
		controls: false,
		adaptiveHeight: true,
		pager: false
	});

$('.timer').addClass("hidden").viewportChecker({
        classToAdd: 'visible',
        offset: 100
       });	

});





var a = 0;
$(window).scroll(function() {

  var oTop = $('#statistics').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.statistics-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    a = 1;
  }

});