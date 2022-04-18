$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 40){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");


        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slinde up
   $('.scroll-up-btn').click(function(){
   $('html').animate({scrollTop: 0});
  });
    // meniu.navbar

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        
    });

    //text animation
    let typed = new Typed(".typing",{
        strings: ["Web","Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    let typed1 = new Typed(".typing1",{
        strings: ["Web","Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $(document).ready(function(){
        $('#btnDownload').click(function(e){
            e.preventDefault();
            window.location.href = "CV.docx";
        });
    });
    //owl carousel 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    })
});