/**
* Created with eric.
* User: Lokeh
* Date: 2014-07-18
* Time: 08:42 PM
* To change this template use Tools | Templates.
*/
;(function () {

    function animate_downarrow() {
        $(".arrow").fadeIn(300).animate({marginBottom : "10px"}).delay(1000).animate({marginBottom : "0px"}).fadeOut(1000, function () {
            animate_downarrow();
        });
    }
    

    $(document).ready(function () {
        var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        
        function isMobile() {
            return windowWidth < 500;
        }

        $('.logo').css('height', windowHeight);

        $('.product a').click(function (e) {
            e.preventDefault();
            if (!isMobile()) {
                $('#modalPic').attr('src', $(this).attr('href'));
                $('#myModal').modal('show'); 
            }
        });

        animate_downarrow();

        $('.arrow').click(function() {
            $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 500);
        });
    });
}());