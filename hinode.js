
// Add a slide
$('.container').slick({
    dots: true,
    arrows: true
});
$('.vitrine').slick({
    dots: true,
    arrows: true,
    slidesToShow: 4
});

// Get the current slide
var currentSlide = $('.your-element').slick('slickCurrentSlide');

