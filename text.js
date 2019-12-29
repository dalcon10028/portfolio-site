$(function() {
   var progressText = $('#summery article h2'),
       user = progressText.find('#user'),
       transaction = progressText.find('#transaction'),
       executed = false; //숫자 움직임이 한번만 실행되게 하기

   $(window).scroll(function() {
      let threshold = $('#summery').offset().top - 300;
      if (!executed) {
         if ($(window).scrollTop() > threshold) {
            let userRate = 3600,
                transactionRate = 64;
            $({rate: 0}).animate({rate: userRate},{
               duration:2500,
               progress: function() {
                  let now = Math.ceil(this.rate);
                  user.text(now+'만');
               }
            });
            $({rate: 0}).animate({rate: transactionRate},{
               duration:1500,
               progress: function() {
                  let now = Math.ceil(this.rate);
                  transaction.text(now+'조 원');
               }
            });
            executed = true;
         }
      }
   });
});