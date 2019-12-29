$(function() {
    var tabAnchor = $('.tab-contents li'),
        tabPanel = $('.tab-body');
    
    // 탭을 클릭하면
    tabAnchor.click(function(e) {
        e.preventDefault(); //a태그 기능 막기

        $(this).find('a').addClass('active-tab');
        $(this).siblings().find('a').removeClass('active-tab');

        tabPanel.hide();

        var $idx = $(this).index();
        tabPanel.eq($idx).show();
    })

    tabAnchor.eq(0).trigger('click'); // 처음에 첫번째 내용 클릭하는 설정
})