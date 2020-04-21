$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
$('.stories__slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    let el = $('.header');

    if(scroll >= 150){
        el.addClass('sticky');
    }else{
        el.removeClass('sticky');
    }
});

$('.shuffle__item').click(function(){
   $(this).toggleClass('displayed');
   $(this).siblings().removeClass('displayed');
   $('.' + $(this).attr('data-name')).toggleClass('hidden').siblings('div').addClass('hidden');
});

$('.video__link').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      dailymotion: {
       
        index: 'dailymotion.com',
        
        id: function(url) {        
            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
            if (m !== null) {
                if(m[4] !== undefined) {
                  
                    return m[4];
                }
                return m[2];
            }
            return null;
        },
        
        src: 'https://www.dailymotion.com/embed/video/%id%'
        
      }
    }
  }
  
});

/*$('.stats__number').each(function () {
    $(this).appear(function() {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    },{accX: 0, accY: 0});
});*/

let nCount = function (selector) {
        $(selector).each(function () {
            $(this).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: "swing",
                step: function (value) {
                    $(this).text(Math.ceil(value));
                }
            });
        });
    };

    
    let el = $('.stats');
    if(el){
        let a = 0;
        let m = el.offset().top;
        $(window).scroll(function () {
            if(m != ''){
                 let oTop =  - window.innerHeight;
            if (a == 0 && $(window).scrollTop() >= oTop) {
                a++;
                nCount(".stats__count");
                }
            }
           
        });
    }