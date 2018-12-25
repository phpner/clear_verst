$(document).ready(function ($) {

    //------ Menu fixed -------//
    $(window).scroll(function () {
        if ($(this).scrollTop() > 95) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
    //------ End Menu fixed -------//

    //---- Mobail menu ---//
    $('.click-in').click(function () {

        $("#nav-icon").toggleClass('open');
        //$('#wrapper').toggleClass('over');
        $("header .top_menu").toggleClass('opener');

    });

    $(window).resize(function () {
        if(window.outerWidth >= 768){
            $("header .top_menu").removeClass('opener');
            $("#nav-icon").attr('class','');

        }

    });
    //---- End Mobail menu ---//

    //--- Form ---//

    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    //--- End From --//

    //--- From validation ---//

    $(".form").validate({
        success: "valid",
        rules: {
            name: {
                minlength: 3,
                required: true,
            },
            tel: {
                required: true,
                minlength: 5,
            },
            email: {
                required: true,
                minlength: 5,
                email: true
            },
        },
        messages: {
            name: "Ваше имя",
            tel: "Ваш телефон",
            email: "Введите Вашу почту"
        },
        submitHandler: function(form) {
            $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                success: function(response) {
                    $(form)[0].reset();
                    $(".mfp-close").trigger("click");
                    $('#answers').fadeIn(400).delay(2000).fadeOut(1000);

                }
            });
        }
    });


});