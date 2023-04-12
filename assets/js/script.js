//
$(".search_btn").click(function() {
    $('.search').toggleClass('active');
});
//

//
$(".burder").click(function() {
    $('.header_nav').toggleClass('active');
});
//

//
$(".close").click(function() {
    $('.header_nav').removeClass('active');
});
//

//
$(".filter_text").click(function() {
    $(this).parent().toggleClass('active');
});
//

//
$(".filter_title").click(function() {
    $(this).parent().toggleClass('active');
});
//

