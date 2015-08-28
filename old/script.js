$(document).ready(function () {
    //animacja menu
    $('#trigger').click(function () {
        var txt = $('.menu_container').is(':visible') ? '+' : '-';
        $('#trigger').text(txt);
        $('.menu_container').slideToggle();
    });
    //animacja stron    
    $('#home').click(function () {
        $('#content_container').css('left', '50%');
        $('#contact_container').css('left', '-150%');
        $('#cv_container').css('left', '-150%');
        $('#works_container').css('left', '-150%');
    });
    $('#cv').click(function () {
        $('#content_container').css('left', '-150%');
        $('#contact_container').css('left', '-150%');
        $('#cv_container').css('left', '50%');
        $('#works_container').css('left', '-50%');
    });
    $('#works').click(function () {
        $('#content_container').css('left', '-150%');
        $('#contact_container').css('left', '-150%');
        $('#cv_container').css('left', '-150%');
        $('#works_container').css('left', '50%');
    });
    $('#contact').click(function () {
        $('#content_container').css('left', '-150%');
        $('#contact_container').css('left', '50%');
        $('#cv_container').css('left', '-150%');
        $('#works_container').css('left', '-150%');
    });
    //galeria obazkow
    /*$('.thumb').click(function () {
        var src = $(this).attr("src");
        $("#big_foto").fadeOut(500).attr("src", src).fadeIn(500);
    });
     */
    $('.thumb').click(function () {
        var src = $(this).attr('src');
        $('#big_foto').attr('src', src);
    });

        
        
});
                
