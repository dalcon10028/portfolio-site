$(function () {
  var $window = $(window),
      $header = $('.init-header'),
      $headerClone = $header.contents().clone(), // 헤더 내용 복제
      $headerCloneContainer = $('<div class="header-clone"></div>'),
      $threshold = $header.offset().top + $header.outerHeight();

      $headerCloneContainer.append($headerClone);
      $headerCloneContainer.appendTo('header');

      $window.scroll(function() {
        if ($(this).scrollTop() > $threshold) {
           $headerCloneContainer.addClass('visible');
        } else {
           $headerCloneContainer.removeClass('visible');
        }
      })
})
// 헤더 내려오기
$(function(){
    let $menu = $('nav ul li'),
        $section = $('section');

    $menu.click(function(x){
      x.preventDefault(); // 기능 막기
      let idx = $(this).index();
      let contents = $section.eq(idx);
      let contentsDistance = contents.offset().top;
      $('html').stop().animate({scrollTop:contentsDistance}); 
    });
});
// 메뉴 이동하기