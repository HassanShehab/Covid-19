$(window).scroll(function(){
    let x =$(window).scrollTop();
    if(x > 480){
        $('#upBtn').css('opacity' , '1')
    }
    else{
        $('#upBtn').css('opacity' , '0')
    }
})

$(document).ready(function () {
    let li = $('.li');
    li.eq(0).css('background' , '#212121') ;
    li.eq(1).css('background', '#073b4c') ;
    li.eq(2).css('background', '#b6ccfe') ; 
    li.eq(3).css('background' , '#F7F9FE') ;
    let li1 =li.eq(0);
    let li2 =li.eq(1);
    let li3 =li.eq(2);
    let li4 =li.eq(3);

    li.click(function () {

        $('body').css({
            background : $(this).css('background') ,
        })
        $('#about').css({
            background : $(this).css('background') ,
        })
        $('#symptoms').css({
            background : $(this).css('background') ,
        })
        $('.takeStep').css({
            background : $(this).css('background') ,
        })
        $('.TRANSMISSION .row .card').css({
            background : $(this).css('background') ,
        })
        $('.takeStep .container').css({
            background : $(this).css('background') ,
        })
        $('.latest-up .container .row .item').css({
            background : $(this).css('background') ,
        })
        


    })



    li1.click(function(){
        $('h1').css({
            color : '#e9ecef'
        })
        $('h2').css({
            color : '#adb5bd'
        })
        $('h4').css({
            color : '#e9ecef'
        })
        $('h5').css({
            color : '#6c757d'
        })
        $('p').css({
            color : '#f8f9fa'
        })
        $('.symptoms .row .item').css({
            boxShadow : '0px 5px 40px 0px rgb(80 101 142 / 8%)',
        })
        $('.TRANSMISSION .row .card').css({
            boxShadow : '0px 5px 40px 0px rgb(80 101 142 / 8%)',
        })
        $('.latest-up .container .row .item').css({
            boxShadow : '0px 5px 40px 0px rgb(80 101 142 / 8%)',
        })
        
    })
    
    li2.click(function(){
        $('h1').css({
            color : '#e9ecef'
        })
        $('h2').css({
            color : '#adb5bd'
        })
        $('h4').css({
            color : '#e9ecef'
        })
        $('h5').css({
            color : '#6c757d'
        })
        $('p').css({
            color : '#f8f9fa'
        })
        $('.symptoms .row .item').css({
            boxShadow : '0px 5px 40px 0px rgb(80 101 142 / 8%)',
        })
        $('.TRANSMISSION .row .card').css({
            boxShadow : '0px 5px 40px 0px rgb(80 101 142 / 8%)',
        })
        $('.latest-up .container .row .item').css({
            boxShadow : '0px 5px 40px 0px rgb(80 101 142 / 8%)',
        })
        
    })

    li3.click(function(){
        $('h1').css({
            color : '#353535'
        })
        $('h2').css({
            color : '#3c6e71'
        })
        $('h4').css({
            color : '#e9ecef'
        })
        $('h5').css({
            color : '#6c757d'
        })
        $('p').css({
            color : '#335c67'
        })
        $('.symptoms .row .item').css({
            boxShadow : '0px 5px 40px 0px rgb(80 101 142 / 8%)',
        })
        $('.TRANSMISSION .row .card').css({
            boxShadow : '0px 5px 40px 0px rgb(80 101 142 / 8%)',
        })
        $('.latest-up .container .row .item').css({
            boxShadow : '0px 5px 40px 0px rgb(80 101 142 / 8%)',
        })
        
    })


    li4.click(function(){
        $('.firstHeading').css({
            color : '#2a81ea'
        })
        $('.scoundHeading').css({
            color : '#50658e'
        })
        $('.headingBrand-1').css({
            color : '#394B6C'
        })
        $('.headingBrand-2').css({
            color : '#394B6C' 
        })
        $('.headingNum').css({
            color : '#394B6C'
        })
        $('.mainHeading').css({
            color : '#3d4b69'
        })
        $('.container .row .item .headingDiv span h4').css({
            color : '#3d4b69'
        })
        $('p').css({
            color : '#3d4b69'
        })
        $('.symptoms .row .item').css({
            boxShadow : '0px 5px 40px 0px rgb(80 101 142 / 8%)',
        })
        $('.TRANSMISSION .row .card').css({
            boxShadow : '0px 5px 40px 0px rgb(80 101 142 / 8%)',
        })
        $('.latest-up .container .row .item').css({
            boxShadow : '0px 5px 40px 0px rgb(80 101 142 / 8%)',
        })
        
    })


    $('.fa-palette').click(function(){
        $('.colorDiv ul').slideToggle();
    })

})

new WOW().init();

var scroll = new SmoothScroll('a[href*="#"]');

jQuery("#responsive_headline").fitText();