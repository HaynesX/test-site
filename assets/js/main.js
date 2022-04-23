$('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 8000,
});

$(document).ready(function () {
    setTimeout(function () { $(".page-loader").hide(); }, 700);
});

$(document).on('click', '.navbar-toggle', function () {
    $('#custom-collapse').toggleClass('in');
    
});

// $(document).on('click', '.navbar-toggle', function () {
//     setTimeout(function () { $('#custom-collapse').toggleClass('animation-js'); }, 1000);
// });

$(".menu-item").click(function () {
    if ($(this).hasClass("open")) {
        $(".menu-item").removeClass("open");
    }
    else {
        $(".menu-item").removeClass("open");
        $(this).addClass("open");
    }
});


// init Isotope
var $grid = $('.portfolio-grid').isotope({
    itemSelector: '.element-item',
});

// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};

// bind filter button click
$('#filters').on('click', 'a', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on('click', 'a', function () {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.filters-btn').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'a', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});
