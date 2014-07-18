/**
* Created with eric.
* User: Lokeh
* Date: 2014-07-18
* Time: 08:42 PM
* To change this template use Tools | Templates.
*/
(function () {
    
   function animate_downarrow() {
   		$(".arrow").fadeIn(300).animate({marginBottom : "55px"}).delay(1000).animate({marginBottom : "50px"}).fadeOut(1000, function () {
               animate_downarrow();
        });
   }
    
   $(document).ready(function () {
       $('.product a').click(function (e) {
           e.preventDefault();
           $('#modalPic').attr('src', $(this).attr('href'));
           $('#myModal').modal('show');
       });
      
       animate_downarrow();
   });
}())