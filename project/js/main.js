

$(document).ready(function(e){
    $('.info_car .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        navText: ["<img src='images/Vector.png'>","<img src='images/Vector.png'>"],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:7
            }
        }
    })
    $('.partners .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        navText: ["<img src='images/Vector.png'>","<img src='images/Vector.png'>"],
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $('.intresting_places_items_mobile .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        navText: ["<img src='images/Vector.png'>","<img src='images/Vector.png'>"],
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    
    $('.plus').on('click', function(e){
        e.preventDefault()
        let pr_caunt = $(this).closest(".number_input").find("input").val()
        pr_caunt++;
        $(this).closest(".number_input").find("input").val(pr_caunt)
    })

    $('.minus').on('click', function(e){
        e.preventDefault()
        let pr_caunt = $(this).closest(".number_input").find("input").val()
        pr_caunt--;
        if(pr_caunt > 0){
            $(this).closest(".number_input").find("input").val(pr_caunt)
        }else{
            alert("Минимум один человек")
        }
       
    })
    $('.burger').on('click',function(e){
        console.log($(this).closest(".reserv").find(".reserv_bg"));
        $(this).closest(".reserv").find(".reserv_bg").toggleClass('reserv_height');
    })

})
