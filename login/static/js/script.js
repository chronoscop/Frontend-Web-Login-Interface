$(document).ready(function() {
   // Determine if the mouse is pressed on the class labeled for p
   $('.pan').on('mousedown', function() {
       //Add a css animation to move the image and h1welcome inside the pre-box to the right
       $('.pre-box').animate({
           left: '0%'
       });
       //All elements inside the register are not displayed
       $('.register').css('display', 'block');
       $('#regis').css('display', 'block');
       $('.input-box').css('display', 'block');
       $('.login').css('display', 'none');
       $('#login').css('display', 'none');
       var img = document.getElementById("imig");
       img.src = "./static/img/wutiao.jpg";
   });
   $(".pa").on("mousedown", function() {
       $(".pre-box").animate({
           left: '50%'
       });
       //All elements inside the register are not displayed
       $('.register').css('display', 'none');
       $('#regis').css('display', 'none');
       $('.input-box').css('display', 'none');
       $('.login').css('display', 'block');
       $('#login').css('display', 'block');
       var img = document.getElementById("imig");
       img.src = "./static/img/li.jpg";
   });
});
