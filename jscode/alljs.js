// var throttleObj = require('./throttle')
// var throttle = throttleObj.throttle
// console.log(throttle)
// 無法使用尚未解決CORS問題


$(function () {
    $('.head-logo,.footer-logo').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#page-one').offset().top
        }, 500)
    })
})

$(function () {
    $('a[href="#page-two"]').click(function () {
        $("html,body").animate({
            scrollTop: 750
            // page two position 750
        }, 1250)
    })
    $()
})
$(function () {
    $('a[href="#page-three"]').click(function () {
        $("html,body").animate({
            scrollTop: $("#page-three").offset().top
        }, 1250)
    })
})
$(function () {
    $('a[href="#footer"]').click(function () {
        $("html,body").animate({
            scrollTop: $("#footer").offset().top
        }, 1250)
    })
})

// 頁面跳轉動畫

$(function () {
    var $headerBar = $('.pageone-header-bar')
    var $body = $(document)
    var firstPosition = 0

    var $ulBefore = $('.pageone-header-bar ul::before')
    var $listLink = $('.pageone-header-bar a')

    $(window).on('scroll', throttle(function () {
        console.log('head')
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
    }, 100))
})
// headbar 樣式更換動畫
// scroll捲動觸發事件， scrollTop是當下位置，會一直變， offset 是取當下位置.top .left可得值
// offset({top:y, left:x})可用來設定


$(function () {
    $('.header-icon').on('click', function (e) {
        e.preventDefault();
        $('.mobile-menu').toggle(300)
    })
    $('.mobile-menu').on('mouseleave', function (e) {
        $('.mobile-menu').hide(300)
    })
})
// mouseout太敏感了 需要使用mouseleave才可以 兩者差在冒泡與否，事件綁定的層度不同
// menu 動畫

$(function () {
    var $toFirstPage = $('.to-firstPage')
    $toFirstPage.on('click', function () {
        $('html,body').animate({
            scrollTop: $('#page-one').offset().top
        }, 500)
    })

    $(window).on('scroll', throttle(function () {
        // console.log($toFirstPage.offset(),'1')
        if ($toFirstPage.offset().top > 1170) {
            $toFirstPage.addClass('show-to-firstPage')
        } else {
            $toFirstPage.removeClass('show-to-firstPage')
        }
    }, 400))
})
// 右下角小按鈕動畫

$(function () {
    let $middlePhoto = $('.middle-photo')
    let $window = $(window)
    $middlePhoto.css({
        'transform': 'translateX(600px)',
        'opacity': '0'
    })
    $window.on('scroll', throttle(function () {
        let photoPosition = $middlePhoto.offset().top
        let middlePhotoHeight = $middlePhoto.height()
        let fadeUpPosition = photoPosition - window.innerHeight / 2
        let fadeDownPosition = photoPosition + window.innerHeight / 2 + middlePhotoHeight / 2
        if ($window.scrollTop() < fadeDownPosition && $window.scrollTop() > fadeUpPosition) {
            $middlePhoto.css({
                'transform': 'translateX(0px)'
            })
            $middlePhoto.stop().animate({
                opacity: 1
            }, 600)
        } else {
            $middlePhoto.css({
                'transform': 'translateX(600px)'
            })
            $middlePhoto.stop().animate({
                opacity: 0
            }, 600)
        }
    }, 100))

})
// photo 滑動動畫




// $('#img-information').on('show.bs.modal', function (event) {
//     var buttonImg = $(event.relatedTarget)
//     var recipient = buttonImg.data('image')
//     var imgSrc = buttonImg.css('background-image')
//     // console.log(imgSrc)
//     var modal = $(this)
//     modal.find('.modal-title').text('Travel Plan' + '\n' + recipient)
//     modal.find('.modal-img-box').css('background-image', imgSrc)
// })
// 圖片點擊出現modal

function throttle(func, settime) {
    var last, timer;
    if (settime) settime = 250;
    return function () {
        var context = this;
        var args = arguments
        var now = +new Date()
        if (last && now < last + settime) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                last = now;
                func.apply(context, args);
            }, settime)
        } else {
            last = now;
            func.apply(context, args);
        }
    }
}