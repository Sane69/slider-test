$(document).ready(function() {
    $('.main__slider').slick({
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        rows: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerPadding: '20px',
                    centerMode: true,
                    rows: 1
                } 
            }
        ]
    })
})