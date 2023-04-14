// open and close search input
$(".search_btn").click(function() {
    $('#search').toggleClass('active');
});
//

// open header nav
$("#burder").click(function() {
    $('.header_nav').toggleClass('active');
});
//

// close header nav
$(".close").click(function() {
    $('.header_nav').removeClass('active');
});
//

//
$(document).mouseup(function (e){  
    var div = $(".header_nav");  //класс элемента вне которого клик
    if (!div.is(e.target) && div.has(e.target).length === 0) {  
            div.removeClass('active');  
    }
  });
//

// open and close filter
$(".filter_title").click(function() {
    $('.filter_title').not(this).removeClass('active');
    $(this).toggleClass('active');
    $('.filter_title').not(this).parent().removeClass('active');
    $(this).parent().toggleClass('active');
    $('.filter_title').not(this).next().removeClass('active');
    $(this).next().toggleClass('active');
});
//

// opeb and close sublist in filter
$(".filter_text").click(function() {
    $(this).parent().siblings().removeClass('active');
    $(this).parent().toggleClass('active');
});
//

// link product html
$(".product_item").click(function() {
    window.location.href = "product.html";
});
//

