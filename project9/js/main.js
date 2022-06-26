// $(document).ready(function(e){
//     let btn__1 = $('.nav_btn button');
//     let nav = $('.nav__bar')
//     console.log(nav)
    
//     btn__1.on('click', function(e){
//         $('/nav__bar').add('active')
//     })
// })

window.onload = function(e){

    let nav = document.querySelector('.nav')
    let btn = document.querySelector('.nav_btn button')

    btn.addEventListener('click', function(e){
        nav.classList.toggle('active')
    })
     AOS.init();


     $('.what__card a').magnificPopup({
        type: 'image'
        // other options
      });

      $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // navText : ["<span><i class="far fa-hand-point-left"></i></span>","<span><i class="far fa-hand-point-right"></i></span>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
}







