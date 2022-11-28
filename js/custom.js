   var x = document.getElementById("Drum");
   object.onload = function() {
       x.play();
       x.pause();
   };


   function hideInp() {
       $('#inp-block').fadeOut();
       $('#reveal-block').fadeIn();
       $('#reveal-txt').text($('#reveal-inp').val());

   }

   function reveal() {
       $('#first-reveal').hide();
       $('#second-reveal').show();
       x.play();
       x.addEventListener("ended", function() {
           x.currentTime = 0;
           $('#second-reveal').hide();
           $('#fireworks').fadeIn(500);
           $('#reveal-txt').show().animate({
               zoom: '2',
               opacity: '100%'
           });;
       });
   }