(function ($) {

    "use strict";

        // PRE LOADER
        $(window).load(function(){
          $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
        });


        // MENU
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $(window).scroll(function() {
          if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });
  

        // PARALLAX JS
        function initParallax() {
          $('#home').parallax("60%", 100);
          $('#about').parallax("100%", 80);
          $('#project').parallax("80%", 60);
          $('#team').parallax("40%", 40);
          $('#contact').parallax("20%", 20);
          }
        initParallax();


        // Owl Carousel
        var owl = $("#owl-team");
          owl.owlCarousel({
            autoPlay: 6000,
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3],
            itemsTablet: [768,2],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            Speedfast: 200,
        });

})(jQuery);

// POPUP
window.onload = function() {
    let overlay = document.getElementById("overlay");
    let popup = document.getElementById("popup");

    overlay.style.display = "block";
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.opacity = "1";
    }, 100);
};

document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
});

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}


function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split("; ");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.onload = function() {
    if (!getCookie("popupClosed")) {
        let overlay = document.getElementById("overlay");
        let popup = document.getElementById("popup");

        overlay.style.display = "block";
        popup.style.display = "block";

        setTimeout(() => {
            popup.style.opacity = "1";
        }, 100);
    }
};

document.querySelectorAll("#popup button, #popup a").forEach(element => {
    element.addEventListener("click", function() {
        setCookie("popupClosed", "true", 30);
        document.getElementById("overlay").style.display = "none";
        document.getElementById("popup").style.display = "none";
    });
});