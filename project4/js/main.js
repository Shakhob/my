$(document).ready(function(e){

    let tab = $('.session_tabs .nav_tabs li button');
    tab.each(function(index){
        $( this ).on('click', function(e){
            clearActive()
            clearcontentActive()
            $( this ).addClass('active');
            let data__content = $( this ).attr('data-content')
            $('#' + data__content).addClass('active')
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
   


    let tab1 = $('.session_tabs .tab_body .who_are_head input');
    
    tab1.each(function(index){
        $( this ).on('click', function(e){
            clearActiveOne()
            clearcontentActiveOne()
            $( this ).addClass('active');
            let data__content = $( this ).attr('data-content')
            $('#' + data__content).addClass('active')
        })
    })

    function clearActiveOne(){
        tab1.each(function(index){
            
            $( this ).removeClass('active');
                
                
        })
    }

    function clearcontentActiveOne(){
        $('.content_one').each(function(index){
            
            $( this ).removeClass('active');
                
                
        })
    }
   
    let test_tab = $('.test_tab .test_tab_nav li button');
    test_tab.each(function(index){
        $( this ).on('click', function(e){
            clearActiveTest()
            clearcontentActiveTest()
            $( this ).addClass('active');
            let data__content = $( this ).attr('data-content')
            $('#' + data__content).addClass('active')
        })
    })

    function clearActiveTest(){
        test_tab.each(function(index){
            
            $( this ).removeClass('active');
                
                
        })
    }

    function clearcontentActiveTest(){
        $('.test_content').each(function(index){
            
            $( this ).removeClass('active');
                
                
        })
    }
    
    var maxField = 10; //Input fields increment limitation
    var addButton = $('.add_button'); //Add button selector
    var wrapper = $('.answer_option'); //Input field wrapper
    var fieldHTML = '<div class="answer_option_item"><input type="text" name="field_name[]" value="" placeholder="Введите вариант ответа"><input type="checkbox"><a href="javascript:void(0);" class="remove_button"><img src="../images/trashcan.png"/></a></div>'; //New input field html 
    var x = 1; //Initial field counter is 1
    //Once add button is clicked
    $(addButton).click(function(e){
        e.preventDefault()
        //Check maximum number of input fields
        if(x < maxField){ 
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); //Add field html
        }
    });
    
    //Once remove button is clicked
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });


    let question_item  = $('.save_questions_left .questions_item');
    console.log(question_item)
    let save_test = $('.btn_save')
    let error_message = $('.error_message')
    let body = $('.wrapper')
    save_test.on('click', function(e){
        e.preventDefault();
        if(question_item.length<10){
            error_message.addClass('active')
            body.addClass('active')
        }else{
           
        }
    })

    let question_item_mobile  = $('.save_questions_left_mobile .questions_item');
    let btn_save_mobile = $('.btn_save_mobile')
    btn_save_mobile.on('click', function(e){
        e.preventDefault();
        if(question_item_mobile.length<10){
            error_message.addClass('active')
            body.addClass('active')
        }else{
           
        }
    })



    let error_message_ok = $('.error_message a')
    error_message_ok.on('click', function(e){
        e.preventDefault();
        error_message.removeClass('active')
        body.removeClass('active')
    })

    $('.owl-carousel').owlCarousel({
        margin: 25,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
})