$(document).ready(function(){

   

    $('.slide2').slick({
        arrow:true
    });

    $('.slide-footer').slick({
        slidesToShow: 5,
        arrows:false,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
              {
            breakpoint: 455,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

  
    $('.es-cars div').slideUp();
    $('.only-down').slideDown();
    $('.only-down').parent().addClass("active");
    $('.only-down').prev().find('i').removeClass(" fa-plus").addClass("fa-minus")
    $(document).on('click', '.es-cars h5',function(){
        $(this).next().slideToggle();
        $(this).find('i').toggleClass("fa-plus fa-minus")
        $(this).parent().toggleClass("active")
        $(this).parent().siblings().removeClass('active')
        $(this).parent().siblings().find('div').slideUp()
        $(this).parent().siblings().find('i').removeClass('fa-minus').addClass('fa-plus')
    });




    $('.nav-item').mouseenter(function(){
        $('.list-unstyled').addClass('down')
    })


// $('.nav-item .list-unstyled').slideUp()

// $('navbar-nav > li').mouseenter(function(){
//     $('.nav-item .list-unstyled').slideDown()
// })

// $('navbar-nav > li').mouseleave(function(){
//     $('.nav-item .list-unstyled').slideUp()
// })


// $(document).on("mouseenter",".navbar-nav > li .nav-link",function(){
//     $(this).siblings().slideDown();
// })

// $(document).on("mouseleave",".navbar-nav  > li .nav-link",function(){
//     $(this).siblings().slideUp();
// })




    

    var linkVideo = $('.video-cont').attr('data-src');
    $(document).on('click', '#play-video',function(){
        $('.video-cont').attr('src',linkVideo)
    });
    $('.close').click(function(){
        $('.video-cont').attr('src'," ")
    })
    
    $('.side-show').click(function(){
        $('aside').animate({
            right:"0px"
        },500);
    })
    $('aside .close').click(function(){
        $('aside').animate({
            right:"-375px"
        },500)
    })
    $('.carousel .carousel-item').height($(window.height()));
})