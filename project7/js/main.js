$(document).ready(function(e){
    

    $('.plus').on('click', function(e){
        e.preventDefault()
        let pr_caunt = $(this).closest(".number").find("input").val()
        pr_caunt++;
        $(this).closest(".number").find("input").val(pr_caunt)
    })

    $('.minus').on('click', function(e){
        e.preventDefault()
        let pr_caunt = $(this).closest(".number").find("input").val()
        pr_caunt--;
        if(pr_caunt > 0){
            $(this).closest(".number").find("input").val(pr_caunt)
        }else{
            alert("в корзину нельзя добавить меньше одного товара")
        }
       
    })
    // var owl = $('.owl-carousel');
    // owl.owlCarousel({
    //     loop:true,
    //     nav:true,
    //     navText : ['<span><i class="far fa-caret-square-left"></i></span>','<span><i class="far fa-caret-square-right"></i></span>'],
    //     margin:10,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         480:{
    //             items:1
    //         }, 
    //         720:{
    //             items:1
    //         },           
    //         960:{
    //             items:3
    //         },
    //         1200:{
    //             items:3
    //         }
    //     }
    // });
    // owl.on('mousewheel', '.owl-stage', function (e) {
    //     if (e.deltaY>0) {
    //         owl.trigger('next.owl');
    //     } else {
    //         owl.trigger('prev.owl');
    //     }
    //     e.preventDefault();
    // });

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:5,
            nav:true,
            navText : ['<span><i class="far fa-caret-square-left"></i></span>','<span><i class="far fa-caret-square-right"></i></span>'],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                }, 
                720:{
                    items:1
                },           
                960:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        })




})