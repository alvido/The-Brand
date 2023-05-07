// open and close search input
$(document).ready(function() {
    $(".search_btn").click(function() {
        $('#search').toggleClass('active');
    });
    $(document).mouseup(function (e){
        if (!$(".search_btn").is(e.target) &&  $('#search').has(e.target).length === 0 && $(".search_btn").has(e.target).length === 0) {  
            $('#search').removeClass('active');  
        }
    });
});
//

// open and close header nav
$(document).ready(function() {
    $("#burder").click(function() {
        $('.header_nav').toggleClass('active');
    });
    $(".close").click(function() {
        $('.header_nav').removeClass('active');
    });
    $(document).mouseup(function (e){  
        var headerNav = $(".header_nav");  //класс элемента вне которого клик
        if (!headerNav.is(e.target) && headerNav.has(e.target).length === 0 && $("#burder").has(e.target).length === 0) {  
            headerNav.removeClass('active');  
        }
      });
});
//

// open and close filter
$(".filter_btn").click(function(e) {
    $('.filter_btn').not(this).removeClass('active');
    $(this).toggleClass('active');
    $('.filter_btn').not(this).parent().removeClass('active');
    $(this).parent().toggleClass('active');
    $('.filter_btn').not(this).next().removeClass('active');
    $(this).next().toggleClass('active');
    $(document).mouseup(function (e){
        if (!$(".filter_btn").parent().is(e.target) && $(".filter_btn").parent().has(e.target).length === 0 && $(".filter_btn").has(e.target).length === 0) {  
            $(".filter_btn").removeClass('active'); 
            $(".filter_btn").parent().removeClass('active'); 
            $(".filter_btn").next().removeClass('active'); 
        }
      });
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

// Slider
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlider();
}
function updateSlider() {
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}
updateSlider();
//

//

//

