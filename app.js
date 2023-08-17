jQuery(document).ready(function ($) {
  var owl = $("#owl-demo-2");
  owl.owlCarousel({
    items: 1,
    center: true,
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
	  1200: {
        items: 4,
      },
    },

    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
  });

  $(".next").click(function () {
    owl.trigger("owl.next");
  });
  $(".prev").click(function () {
    owl.trigger("owl.prev");
  });
});


$(window).scroll(function () {
  if($(window).scrollTop() > 200){
	$(".nav-section").addClass("nav-bar-scroll");
}
else {
  $(".nav-section").removeClass("nav-bar-scroll");
}
});