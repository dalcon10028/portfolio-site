$(function() {
    var tabAnchor = $('.tab-contents li'),
        tabPanel = $('.tab-body');
    
    // ���� Ŭ���ϸ�
    tabAnchor.click(function(e) {
        e.preventDefault(); //a�±� ��� ����

        $(this).find('a').addClass('active-tab');
        $(this).siblings().find('a').removeClass('active-tab');

        tabPanel.hide();

        var $idx = $(this).index();
        tabPanel.eq($idx).show();
    })

    tabAnchor.eq(0).trigger('click'); // ó���� ù��° ���� Ŭ���ϴ� ����
})