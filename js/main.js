   jQuery('.stellarnav').stellarNav({
        theme: 'plain',
        breakpoint: 767,
        menuLabel: '',
        position: 'right',

    });


      $('.tab-c').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        center: true,
        margin: 0,
        smartSpeed: 3000,
        navText: ["<img src='images/leftbtn.svg'>", "<img src='images/rightbtn.svg'>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                center: false,
            },
            600: {
                items: 1,
                nav: false,
                center: false,
            },
            1000: {
                items: 3
            }
        }
    });


       $('.port-c').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        center: true,
        margin: 50,
        smartSpeed: 3000,
        navText: ["<img src='images/p-left.svg'>", "<img src='images/pright.svg'>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                center: false,
            },
            600: {
                items: 1,
                nav: false,
                center: false,
            },
            1000: {
                items: 3
            }
        }
    });

           $('.test-c').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        center: false,
        margin: 50,
        smartSpeed: 3000,
        navText: ["<img src='images/p-left.svg'>", "<img src='images/pright.svg'>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                center: false,
            },
            600: {
                items: 1,
                nav: false,
                center: false,
            },
            1000: {
                items: 2
            }
        }
    });