

$(document).ready(function(e){

    let tab = $('.price__tabs .nav li button');
    tab.each(function(index){
        $( this ).on('click', function(e){
            clearActive()
            clearcontentActive()
            $( this ).addClass('active');
            let data__content = $( this ).attr('data-content')
            $('#' + data__content).addClass('active')
            console.log(data__content)
        })
    })


    function clearActive(){
        tab.each(function(index){
            
            $( this ).removeClass('active');
                
                
        })
    }

    function clearcontentActive(){
        $('.content').each(function(index){
            
            $( this ).removeClass('active');
                
                
        })
    }
    let wrapper = $('.wrapper')
    let open = $('.btn__header') ;
    let mymodal = $('.modal_container');
    let close = $('.close')
    

    open.on('click', function(index){
        mymodal.addClass('active')
    })

    close.on('click', function(index){
        mymodal.removeClass('active')
    })
    // wrapper.on('mousedown', function(index){
    //     mymodal.removeClass('active')
    // })

    let menu = $('.navbar_menu')
    let nav_menu = $('.nav_mb')
    
    menu.on('click', function(index){
        nav_menu.toggleClass('active');
        $('.header__bottom__mobile__contact__top').toggleClass('active');
        $('.header__bottom__mobile').toggleClass('active');
        $(this).toggleClass('active')

    })





    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        navText: ["<img src='images/arrow.svg'>","<img src='images/arrow.svg'>"],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
    

})
