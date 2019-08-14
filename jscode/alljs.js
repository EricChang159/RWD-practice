$(function () {
    $('a[href="#page-two"]').click(function () {
        $("html,body").animate({
            scrollTop: $("#page-two").offset().top
        }, 1250)
    })
})
$(function () {
    $('a[href="#page-three"]').click(function () {
        $("html,body").animate({
            scrollTop: $("#page-three").offset().top
        }, 1250)
    })
})

$(function () {
    var $headerBar = $('.pageone-header-bar')
    var $body = $(document)
    var firstPosition = 0

    var $ulBefore = $('.pageone-header-bar ul::before')
    var $listLink = $('.pageone-header-bar a')
    $(window).on('scroll', function () {
        if ($headerBar.offset().top == firstPosition) {
            $headerBar.removeClass('pageone-header-bar-change')
            $ulBefore.removeClass('ul-before-change')
            $listLink.removeClass('a-change')
        } else if ($headerBar.attr('class').includes('pageone-header-bar-change') == true) {
            return;
        } else if ($headerBar.offset().top > firstPosition) {
            $headerBar.addClass('pageone-header-bar-change')
            $ulBefore.addClass('ul-before-change')
            $listLink.addClass('a-change')
        } else {
            return;
        }
    })
})