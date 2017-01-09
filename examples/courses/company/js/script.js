$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail2').hover(
        function(){
            $(this).find('.caption2').slideDown(250); //.fadeIn(250)
            $(this).find('.project-category').hide(); 
        },
        function(){
            $(this).find('.caption2').slideUp(250); //.fadeOut(205)
            $(this).find('.project-category').show();
        }
    ); 
});