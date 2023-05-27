$(document).ready(function() {
    const projects = new Swiper('.swiper_projects_js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        autoplay: {
          delay: 5000,
        },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.projects_dotted_js',
            clickable: true,
        },

        breakpoints: {
            768: {
                spaceBetween: 16,
                slidesPerView: 2,
            },

        }
    });

    const services = new Swiper('.swiper_services_js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        autoplay: {
          delay: 5000,
        },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.services_dotted_js',
            clickable: true,
        },

        breakpoints: {
            768: {
                spaceBetween: 20,
                slidesPerView: 3,
            },

        }
    });

    const ourteam = new Swiper('.swiper_ourteam_js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        autoplay: {
          delay: 5000,
        },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.dotted_ourteam_mobile_js',
            clickable: true,
        },

        breakpoints: {
            768: {
                spaceBetween: 20,
                slidesPerView: 3,

                pagination: {
                    el: '.dotted_ourteam_js',
                    clickable: true,
                },
            },

        }
    });

    const testimonials = new Swiper('.swiper_testimonials_js', {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        autoplay: {
          delay: 5000,
        },

        navigation: {
            nextEl: '.icon_arrow_long_right',
            prevEl: '.icon_arrow_long_left',
        },
        pagination: {
            el: '.dotted_testimonials_js',
            clickable: true,
        },


    });

    const testimonials2 = new Swiper('.swiper_testimonials2_js', {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        autoplay: {
          delay: 5000,
        },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },

    });

});
